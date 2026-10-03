/* =========================================
   ATD VALUES CALCULATOR
========================================= */

const yourOffer = [];
const theirOffer = [];

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");


/* =========================================
   FORMAT NUMBERS
========================================= */

function formatValue(number) {

    return Number(number).toLocaleString("en-US");

}


/* =========================================
   RENDER UNIT DATABASE
========================================= */

function renderUnits() {

    const search = searchInput.value
        .trim()
        .toLowerCase();

    const category = categorySelect.value;

    grid.innerHTML = "";

    const filtered = UNITS.filter(unit => {

        const matchesSearch =
            unit.name
                .toLowerCase()
                .includes(search)

            ||

            unit.id
                .toLowerCase()
                .includes(search);

        const matchesCategory =
            category === "All"

            ||

            unit.category === category;

        return matchesSearch && matchesCategory;

    });


    const categories = [
        "Units",
        "Events",
        "Mythics"
    ];


    categories.forEach(categoryName => {

        if (
            category !== "All" &&
            category !== categoryName
        ) {
            return;
        }


        const units = filtered.filter(
            unit =>
                unit.category === categoryName
        );


        if (units.length === 0) {
            return;
        }


        const title =
            document.createElement("div");

        title.className = "cat-title";

        title.textContent =
            categoryName;


        grid.appendChild(title);


        units.forEach(unit => {

            const button =
                document.createElement("button");

            button.className = "unit";


            button.innerHTML = `

                <img
                    src="${unit.icon}"
                    alt="${unit.name}"
                    loading="lazy"
                >

                <div class="unit-name">
                    ${unit.name}
                </div>

                <div class="unit-value">
                    ${formatValue(unit.value)}
                </div>

                <div class="meta">
                    Demand ${unit.demand}/10
                    •
                    ${unit.status}
                </div>

            `;


            /*
                LEFT CLICK
                Adds to YOUR offer
            */

            button.addEventListener(
                "click",
                () => {

                    addUnit(
                        unit,
                        "your"
                    );

                }
            );


            /*
                RIGHT CLICK
                Adds to THEIR offer
            */

            button.addEventListener(
                "contextmenu",
                event => {

                    event.preventDefault();

                    addUnit(
                        unit,
                        "their"
                    );

                }
            );


            grid.appendChild(button);

        });

    });


    document.getElementById("count")
        .textContent =
        `${filtered.length} units`;

}


/* =========================================
   ADD UNIT
========================================= */

function addUnit(unit, side) {

    if (side === "your") {

        yourOffer.push(unit);

    } else {

        theirOffer.push(unit);

    }

    renderOffers();

}


/* =========================================
   REMOVE UNIT
========================================= */

function removeUnit(side, index) {

    if (side === "your") {

        yourOffer.splice(
            index,
            1
        );

    } else {

        theirOffer.splice(
            index,
            1
        );

    }

    renderOffers();

}


/* =========================================
   RENDER SELECTED UNITS
========================================= */

function renderSelected(
    side,
    units
) {

    const container =
        document.getElementById(
            `${side}Selected`
        );


    container.innerHTML = "";


    if (units.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    +
                </div>

                <strong>
                    No units added
                </strong>

                <span>
                    Select units below
                </span>

            </div>

        `;

        return;

    }


    units.forEach(
        (unit, index) => {

            const card =
                document.createElement("div");

            card.className =
                "selected-card";


            card.innerHTML = `

                <button
                    class="x"
                    aria-label="Remove unit">
                    ×
                </button>

                <img
                    src="${unit.icon}"
                    alt="${unit.name}"
                >

                <small>
                    ${formatValue(unit.value)}
                </small>

            `;


            card
                .querySelector(".x")
                .addEventListener(
                    "click",
                    () => {

                        removeUnit(
                            side,
                            index
                        );

                    }
                );


            container.appendChild(card);

        }
    );

}


/* =========================================
   CALCULATE TOTAL
========================================= */

function calculateTotal(units) {

    return units.reduce(
        (total, unit) => {

            return total + Number(unit.value);

        },
        0
    );

}


/* =========================================
   TRADE RESULT
========================================= */

function updateResult(
    yourTotal,
    theirTotal
) {

    const resultMain =
        document.getElementById(
            "resultMain"
        );

    const difference =
        document.getElementById(
            "difference"
        );


    /*
        Nothing selected
    */

    if (
        yourOffer.length === 0 ||
        theirOffer.length === 0
    ) {

        resultMain.textContent =
            "Add units to both sides";

        difference.textContent =
            "Select units below to begin.";

        return;

    }


    const differenceValue =
        yourTotal - theirTotal;


    /*
        EXACTLY EQUAL
    */

    if (differenceValue === 0) {

        resultMain.textContent =
            "🟡 FAIR";

        difference.textContent =
            "Both offers have the same value.";

        return;

    }


    const percentage =
        Math.abs(
            differenceValue
        ) /

        Math.max(
            yourTotal,
            theirTotal
        ) *

        100;


    /*
        W / F / L thresholds

        0-10% = Fair
        10-25% = Slight W/L
        25%+ = W/L
    */

    if (
        Math.abs(percentage) <= 10
    ) {

        resultMain.textContent =
            "🟡 FAIR";

        difference.textContent =
            `${formatValue(
                Math.abs(differenceValue)
            )} value difference • ${percentage.toFixed(1)}%`;

    }


    else if (
        differenceValue > 0
    ) {

        resultMain.textContent =
            "🟢 WIN";

        difference.textContent =
            `You have ${formatValue(
                differenceValue
            )} more value • ${percentage.toFixed(1)}%`;

    }


    else {

        resultMain.textContent =
            "🔴 LOSS";

        difference.textContent =
            `You have ${formatValue(
                Math.abs(differenceValue)
            )} less value • ${percentage.toFixed(1)}%`;

    }

}


/* =========================================
   RENDER EVERYTHING
========================================= */

function renderOffers() {

    renderSelected(
        "your",
        yourOffer
    );

    renderSelected(
        "their",
        theirOffer
    );


    const yourTotal =
        calculateTotal(
            yourOffer
        );

    const theirTotal =
        calculateTotal(
            theirOffer
        );


    document.getElementById(
        "yourTotal"
    ).textContent =
        formatValue(yourTotal);


    document.getElementById(
        "theirTotal"
    ).textContent =
        formatValue(theirTotal);


    updateResult(
        yourTotal,
        theirTotal
    );

}


/* =========================================
   CLEAR BUTTONS
========================================= */

document
    .querySelectorAll(".clear-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const side =
                    button.dataset.side;


                if (side === "your") {

                    yourOffer.length = 0;

                } else {

                    theirOffer.length = 0;

                }


                renderOffers();

            }
        );

    });


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    renderUnits
);


/* =========================================
   CATEGORY
========================================= */

categorySelect.addEventListener(
    "change",
    renderUnits
);


/* =========================================
   INITIAL LOAD
========================================= */

renderUnits();

renderOffers();
