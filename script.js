const FALLBACK_ICON = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="18" fill="#1f2937"/>
        <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="#f8fafc" font-size="32" font-family="Arial, sans-serif" font-weight="700">ATD</text>
    </svg>
`)}`;

function setUnitIcon(img, src) {
    if (!img) return;

    img.onerror = null;
    img.src = src || FALLBACK_ICON;

    img.onerror = () => {
        img.onerror = null;
        img.src = FALLBACK_ICON;
    };
}

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
                src="${unit.icon || FALLBACK_ICON}"
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

        const icon = card.querySelector(".unit-icon");
        setUnitIcon(icon, unit.icon);


        /* DESKTOP + MOBILE UNIT SELECTION */

        card.addEventListener("click", () => {

            // On mobile, show the offer chooser
            if (window.innerWidth <= 600) {
                showMobileChoice(unit);
                return;
            }

            // Desktop: left click = Your Offer
            yourOffer.push(unit);
            updateCalculator();

        });


        /* DESKTOP: RIGHT CLICK = THEIR OFFER */

        card.addEventListener("contextmenu", event => {

            event.preventDefault();

            // Desktop only
            if (window.innerWidth > 600) {
                theirOffer.push(unit);
                updateCalculator();
            }

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
            <img src="${unit.icon || FALLBACK_ICON}" alt="${unit.name}">
            <span>${unit.name}</span>
        `;

        const icon = item.querySelector("img");
        setUnitIcon(icon, unit.icon);

        item.title = "Click to remove";

        item.addEventListener("click", () => {

            array.splice(index, 1);

            updateCalculator();

        });

        element.appendChild(item);

    });

}
