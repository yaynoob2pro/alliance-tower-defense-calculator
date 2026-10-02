const your = [], their = [];
const grid = document.getElementById('grid');
const search = document.getElementById('search');
const category = document.getElementById('category');

function money(n){ return n.toLocaleString('en-US'); }

function renderGrid(){
  const q = search.value.trim().toLowerCase();
  const cat = category.value;
  grid.innerHTML = '';
  const filtered = UNITS.filter(u =>
    (cat === 'All' || u.category === cat) &&
    (u.name.toLowerCase().includes(q) || u.id.toLowerCase().includes(q))
  );
  const cats = ['Units','Events','Mythics'];
  for(const c of cats){
    if(cat !== 'All' && cat !== c) continue;
    const list = filtered.filter(u => u.category === c);
    if(!list.length) continue;
    const title = document.createElement('div');
    title.className='cat-title'; title.textContent=c;
    grid.appendChild(title);
    list.forEach(u => {
      const b=document.createElement('button');
      b.className='unit';
      b.innerHTML=`<img src="${u.icon}" alt="${u.name}" loading="lazy"><div class="unit-name">${u.name}</div><div class="unit-value">${money(u.value)}</div><div class="meta">Demand ${u.demand}/10 • ${u.status}</div>`;
      b.addEventListener('click',()=>addUnit(u,'your'));
      b.addEventListener('contextmenu',e=>{e.preventDefault();addUnit(u,'their')});
      grid.appendChild(b);
    });
  }
  document.getElementById('count').textContent=`${filtered.length} units • Left click: your offer • Right click: their offer`;
}

function addUnit(u,side){
  (side==='your'?your:their).push(u);
  renderOffers();
}
function removeUnit(side,index){
  (side==='your'?your:their).splice(index,1);
  renderOffers();
}
function renderOffers(){
  renderOne('your',your); renderOne('their',their);
  const yt=your.reduce((a,u)=>a+u.value,0), tt=their.reduce((a,u)=>a+u.value,0);
  document.getElementById('yourTotal').textContent=money(yt);
  document.getElementById('theirTotal').textContent=money(tt);
  const main=document.getElementById('resultMain'), diff=document.getElementById('difference');
  if(!your.length || !their.length){main.textContent='Add units to both sides';diff.textContent='Choose units from the list below.';return}
  const d=yt-tt, pct=tt ? Math.abs(d)/tt*100 : 100;
  if(Math.abs(d)<0.0001){main.textContent='🟡 FAIR';diff.textContent='Both sides have equal value.'}
  else if(d>0){main.textContent='🟢 YOUR SIDE HAS MORE VALUE';diff.textContent=`+${money(d)} value • ${pct.toFixed(1)}% difference`}
  else {main.textContent='🔴 THEIR SIDE HAS MORE VALUE';diff.textContent=`-${money(Math.abs(d))} value • ${pct.toFixed(1)}% difference`}
}
function renderOne(side,arr){
  const el=document.getElementById(side+'Selected');
  el.innerHTML='';
  if(!arr.length){el.innerHTML='<div class="empty">Click a unit below to add it.</div>';return}
  arr.forEach((u,i)=>{
    const card=document.createElement('div'); card.className='selected-card';
    card.innerHTML=`<button class="x" aria-label="Remove">×</button><img src="${u.icon}" alt="${u.name}"><small>${money(u.value)}</small>`;
    card.querySelector('.x').onclick=()=>removeUnit(side,i);
    el.appendChild(card);
  });
}
document.querySelectorAll('.clear').forEach(b=>b.onclick=()=>{(b.dataset.side==='your'?your:their).length=0;renderOffers()});
search.addEventListener('input',renderGrid); category.addEventListener('change',renderGrid);
renderGrid(); renderOffers();
