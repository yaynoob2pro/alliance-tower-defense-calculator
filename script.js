const yourOffer = [];
const theirOffer = [];

const unitGrid = document.getElementById("unitGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const yourOfferElement = document.getElementById("yourOffer");
const theirOfferElement = document.getElementById("theirOffer");

const yourTotalElement = document.getElementById("yourTotal");
const theirTotalElement = document.getElementById("theirTotal");

const resultBadge = document.getElementById("resultBadge");
const differenceElement = document.getElementById("difference");
const resultText = document.getElementById("resultText");

const clearYour = document.getElementById("clearYour");
const clearTheir = document.getElementById("clearTheir");


/* =========================
   HELPERS
========================= */

function formatValue(value) {

    if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "M";
    }

    if (value >= 1000) {
        return (value / 1000).toFixed(value >= 10000 ? 0 : 1) + "K";
    }

    return value.toLocaleString();
}


function getUnitCategory(unit) {

    if (unit.category) {
        return unit.category;
    }

    return "Regular";
}


/* =========================
   UNIT GRID
========================= */

function renderUnits() {

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    unitGrid.innerHTML = "";

    const filtered = UNITS.filter(unit => {

        const matchesSearch =
            unit.name.toLowerCase().includes(search);

        const matchesCategory =
            category === "All" ||
            getUnitCategory(unit) === category;

        return matchesSearch && matchesCategory;
    });


    filtered.forEach(unit => {

        const card = document.createElement("div");

        card.className = "unit-card";

        card.innerHTML = `
            <img
                class="unit-icon"
                src="${unit.icon}"
                alt="${unit.name}"
            >

            <div class="unit-name">
                ${unit.name}
            </div>

            <div class="unit-value">
                ${formatValue(unit.value)}
            </div>

            <div class="unit-info">

                <span class="demand">
                    Demand ${unit.demand}/10
                </span>

                <span class="status">
                    ${unit.status}
                </span>

            </div>
        `;


        /* LEFT CLICK = YOUR OFFER */

        card.addEventListener("click", () => {

            yourOffer.push(unit);

            updateCalculator();

        });


        /* RIGHT CLICK = THEIR OFFER */

        card.addEventListener("contextmenu", event => {

            event.preventDefault();

            theirOffer.push(unit);

            updateCalculator();

        });


        unitGrid.appendChild(card);

    });


    if (filtered.length === 0) {

        unitGrid.innerHTML = `
            <p style="
                grid-column:1/-1;
                text-align:center;
                color:#68748a;
                padding:40px;
            ">
                No units found.
            </p>
        `;
    }

}


/* =========================
   OFFER RENDERING
========================= */

function renderOffer(array, element) {

    element.innerHTML = "";

    if (array.length === 0) {

        element.innerHTML = `
            <div class="empty-offer">
                <span>+</span>
                <p>Add units from below</p>
            </div>
        `;

        return;
    }


    array.forEach((unit, index) => {

        const item = document.createElement("div");

        item.className = "offer-item";

        item.innerHTML = `
            <img src="${unit.icon}" alt="${unit.name}">
            <span>${unit.name}</span>
        `;


        item.title = "Click to remove";


        item.addEventListener("click", () => {

            array.splice(index, 1);

            updateCalculator();

        });


        element.appendChild(item);

    });

}


/* =========================
   CALCULATOR
========================= */

function updateCalculator() {

    renderOffer(yourOffer, yourOfferElement);
    renderOffer(theirOffer, theirOfferElement);


    const yourTotal =
        yourOffer.reduce((sum, unit) => sum + unit.value, 0);

    const theirTotal =
        theirOffer.reduce((sum, unit) => sum + unit.value, 0);


    yourTotalElement.textContent =
        formatValue(yourTotal);

    theirTotalElement.textContent =
        formatValue(theirTotal);


    calculateResult(yourTotal, theirTotal);

}


/* =========================
   WIN / FAIR / LOSS
========================= */

function calculateResult(yourTotal, theirTotal) {

    resultBadge.className = "result-badge fair";

    if (yourTotal === 0 && theirTotal === 0) {

        resultBadge.textContent = "FAIR";
        differenceElement.textContent = "0%";
        resultText.textContent = "Add units to compare";

        return;
    }


    if (theirTotal === 0) {

        resultBadge.textContent = "—";
        differenceElement.textContent = "—";
        resultText.textContent = "Add something to their offer";

        return;
    }


    const difference =
        ((yourTotal - theirTotal) / theirTotal) * 100;


    const rounded =
        Math.abs(difference).toFixed(1);


    differenceElement.textContent =
        `${rounded}%`;


    if (Math.abs(difference) <= 10) {

        resultBadge.className = "result-badge fair";
        resultBadge.textContent = "FAIR";
        resultText.textContent = "The values are close";

    }

    else if (difference > 10) {

        resultBadge.className = "result-badge win";
        resultBadge.textContent = "WIN";
        resultText.textContent = "Your offer has higher value";

    }

    else {

        resultBadge.className = "result-badge loss";
        resultBadge.textContent = "LOSS";
        resultText.textContent = "Their offer has higher value";

    }

}


/* =========================
   CLEAR BUTTONS
========================= */

clearYour.addEventListener("click", () => {

    yourOffer.length = 0;

    updateCalculator();

});


clearTheir.addEventListener("click", () => {

    theirOffer.length = 0;

    updateCalculator();

});


/* =========================
   SEARCH
========================= */

searchInput.addEventListener("input", renderUnits);

categoryFilter.addEventListener("change", renderUnits);


/* =========================
   HERO STATS
========================= */

function updateStats() {

    const count =
        document.getElementById("unitCount");

    const highest =
        document.getElementById("highestValue");


    count.textContent = UNITS.length;


    const highestUnit =
        [...UNITS].sort((a, b) => b.value - a.value)[0];


    if (highestUnit) {

        highest.textContent =
            formatValue(highestUnit.value);

    }

}


/* =========================
   START
========================= */

renderUnits();
updateCalculator();
updateStats();
