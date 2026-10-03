* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --background: #080b12;
    --background-2: #0d111b;
    --card: #111722;
    --card-hover: #151c29;
    --border: #222b3b;

    --text: #f5f7fb;
    --muted: #8792a7;

    --accent: #6372ff;
    --accent-light: #8590ff;

    --green: #35d48a;
    --yellow: #ffc857;
    --red: #ff6678;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Arial,
        sans-serif;

    background:
        radial-gradient(
            circle at 50% -15%,
            #202b48 0%,
            #0b0f18 42%,
            #080b12 75%
        );

    color: var(--text);

    min-height: 100vh;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    height: 72px;

    position: sticky;
    top: 0;

    z-index: 100;

    background: rgba(8, 11, 18, 0.88);

    backdrop-filter: blur(16px);

    border-bottom: 1px solid var(--border);
}

.nav-container {
    max-width: 1200px;

    height: 100%;

    margin: auto;

    padding: 0 22px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}

.logo {
    display: flex;

    align-items: center;

    gap: 11px;

    color: white;

    text-decoration: none;
}

.logo-icon {
    width: 40px;
    height: 40px;

    border-radius: 11px;

    display: grid;

    place-items: center;

    background:
        linear-gradient(
            135deg,
            #7180ff,
            #4e5be0
        );

    font-size: 12px;

    font-weight: 900;

    box-shadow:
        0 8px 25px rgba(91, 105, 255, 0.25);
}

.logo-text {
    display: flex;

    flex-direction: column;

    line-height: 1.1;
}

.logo-text strong {
    font-size: 14px;
}

.logo-text span {
    color: var(--muted);

    font-size: 10px;

    margin-top: 3px;
}

nav {
    display: flex;

    gap: 28px;
}

nav a {
    color: #9aa4b8;

    text-decoration: none;

    font-size: 14px;

    transition: 0.2s;
}

nav a:hover {
    color: white;
}


/* =========================
   HERO
========================= */

.hero {
    padding: 100px 20px 90px;

    text-align: center;

    border-bottom: 1px solid rgba(255,255,255,0.04);
}

.hero-content {
    max-width: 760px;

    margin: auto;
}

.badge {
    display: inline-block;

    padding: 7px 12px;

    border-radius: 999px;

    background: rgba(99, 114, 255, 0.1);

    border: 1px solid rgba(99, 114, 255, 0.25);

    color: #98a2ff;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1px;

    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(40px, 7vw, 72px);

    line-height: 0.98;

    letter-spacing: -3px;

    font-weight: 900;
}

.hero h1 span {
    display: block;

    background:
        linear-gradient(
            90deg,
            #ffffff,
            #7886ff
        );

    -webkit-background-clip: text;

    color: transparent;
}

.hero p {
    max-width: 600px;

    margin: 24px auto 30px;

    color: var(--muted);

    line-height: 1.7;

    font-size: 16px;
}

.hero-button {
    display: inline-block;

    padding: 13px 22px;

    border-radius: 11px;

    color: white;

    background:
        linear-gradient(
            135deg,
            #6977ff,
            #5260e7
        );

    text-decoration: none;

    font-weight: 800;

    font-size: 14px;

    box-shadow:
        0 12px 35px rgba(91, 105, 255, 0.2);

    transition: 0.2s;
}

.hero-button:hover {
    transform: translateY(-2px);
}


/* =========================
   MAIN
========================= */

main {
    max-width: 1200px;

    margin: auto;

    padding: 70px 20px;
}

.calculator-section {
    width: 100%;
}

.section-heading {
    margin-bottom: 25px;
}

.eyebrow {
    color: #7380ff;

    font-size: 11px;

    font-weight: 900;

    letter-spacing: 1.5px;
}

.section-heading h2,
.selector-header h2 {
    margin-top: 7px;

    font-size: 28px;
}

.section-heading p {
    color: var(--muted);

    margin-top: 7px;
}


/* =========================
   TRADE
========================= */

.trade-container {
    display: grid;

    grid-template-columns: 1fr 70px 1fr;

    align-items: center;

    gap: 15px;
}

.trade-box {
    min-height: 275px;

    padding: 20px;

    background:
        linear-gradient(
            145deg,
            rgba(20, 27, 40, 0.98),
            rgba(14, 19, 29, 0.98)
        );

    border: 1px solid var(--border);

    border-radius: 18px;

    box-shadow:
        0 15px 50px rgba(0,0,0,0.15);
}

.trade-box:hover {
    border-color: #303b51;
}

.trade-header {
    display: flex;

    justify-content: space-between;

    align-items: flex-start;

    border-bottom: 1px solid var(--border);

    padding-bottom: 15px;
}

.trade-label {
    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1.3px;

    color: var(--accent-light);
}

.trade-header h3 {
    margin-top: 4px;

    font-size: 19px;
}

.clear-button {
    border: 0;

    background: transparent;

    color: #778298;

    cursor: pointer;

    font-size: 12px;

    padding: 5px 0;
}

.clear-button:hover {
    color: white;
}

.selected-units {
    min-height: 145px;

    padding: 15px 0;

    display: flex;

    flex-wrap: wrap;

    align-content: flex-start;

    gap: 9px;
}

.empty-state {
    width: 100%;

    min-height: 130px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    color: #69758b;
}

.empty-state strong {
    color: #8994a8;

    font-size: 13px;

    margin-top: 8px;
}

.empty-state span {
    font-size: 11px;

    margin-top: 3px;
}

.empty-icon {
    width: 35px;
    height: 35px;

    border-radius: 10px;

    border: 1px dashed #3a4559;

    display: grid;

    place-items: center;

    font-size: 18px;
}

.selected-card {
    width: 72px;

    min-height: 80px;

    position: relative;

    padding: 7px;

    text-align: center;

    border-radius: 11px;

    background: #181f2d;

    border: 1px solid #293447;
}

.selected-card img {
    width: 48px;

    height: 48px;

    object-fit: contain;
}

.selected-card small {
    display: block;

    color: #b8c1d1;

    font-size: 10px;

    font-weight: 700;

    margin-top: 3px;
}

.selected-card .x {
    position: absolute;

    top: -6px;

    right: -6px;

    width: 20px;
    height: 20px;

    border: 2px solid #111722;

    border-radius: 50%;

    background: #e65d6e;

    color: white;

    cursor: pointer;

    font-size: 11px;

    line-height: 15px;
}

.total-box {
    padding-top: 15px;

    border-top: 1px solid var(--border);

    display: flex;

    justify-content: space-between;

    align-items: center;

    color: var(--muted);

    font-size: 13px;
}

.total-box strong {
    color: white;

    font-size: 21px;
}

.vs-container {
    display: flex;

    justify-content: center;
}

.vs-circle {
    width: 55px;
    height: 55px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background: #151c29;

    border: 1px solid #303b50;

    color: #8490ff;

    font-size: 13px;

    font-weight: 900;

    box-shadow:
        0 8px 30px rgba(0,0,0,0.25);
}


/* =========================
   RESULT
========================= */

.result-box {
    margin-top: 15px;

    padding: 24px;

    border-radius: 16px;

    background:
        linear-gradient(
            135deg,
            rgba(99,114,255,0.09),
            rgba(17,23,34,0.9)
        );

    border: 1px solid #293450;

    text-align: center;
}

.result-small {
    display: block;

    color: #79859a;

    font-size: 10px;

    letter-spacing: 1.5px;

    font-weight: 900;
}

.result-box strong {
    display: block;

    font-size: 25px;

    margin: 7px 0;
}

.result-box span:last-child {
    color: var(--muted);

    font-size: 13px;
}


/* =========================
   UNIT DATABASE
========================= */

.unit-selector {
    margin-top: 45px;

    padding: 24px;

    border-radius: 20px;

    background: rgba(13, 18, 27, 0.8);

    border: 1px solid var(--border);
}

.selector-header {
    display: flex;

    justify-content: space-between;

    align-items: flex-end;
}

.unit-count {
    color: #727e94;

    font-size: 12px;
}

.search-area {
    display: flex;

    gap: 10px;

    margin: 22px 0;
}

.search-box {
    flex: 1;

    display: flex;

    align-items: center;

    gap: 10px;

    padding: 0 14px;

    border-radius: 11px;

    background: #151b27;

    border: 1px solid #293345;
}

.search-box span {
    font-size: 24px;

    color: #75819a;

    transform: rotate(-20deg);
}

.search-box input {
    width: 100%;

    padding: 13px 0;

    border: 0;

    outline: 0;

    background: transparent;

    color: white;

    font-size: 14px;
}

.search-box input::placeholder {
    color: #657087;
}

.search-area select {
    width: 150px;

    padding: 0 12px;

    border-radius: 11px;

    border: 1px solid #293345;

    background: #151b27;

    color: #dfe4ed;

    outline: none;

    cursor: pointer;
}


/* =========================
   UNIT GRID
========================= */

.unit-grid {
    display: grid;

    grid-template-columns:
        repeat(
            auto-fill,
            minmax(135px, 1fr)
        );

    gap: 10px;
}

.cat-title {
    grid-column: 1 / -1;

    padding: 15px 3px 5px;

    color: #7885ff;

    font-size: 11px;

    font-weight: 900;

    letter-spacing: 1.3px;

    text-transform: uppercase;
}

.unit {
    min-width: 0;

    padding: 13px 9px;

    border-radius: 13px;

    background: #151b27;

    border: 1px solid #273143;

    color: white;

    cursor: pointer;

    text-align: center;

    transition:
        transform 0.15s,
        border-color 0.15s,
        background 0.15s;
}

.unit:hover {
    transform: translateY(-3px);

    background: #1a2130;

    border-color: #6372ff;

    box-shadow:
        0 10px 30px rgba(0,0,0,0.2);
}

.unit img {
    width: 70px;
    height: 70px;

    object-fit: contain;

    display: block;

    margin: auto;
}

.unit-name {
    margin-top: 8px;

    color: #cbd2df;

    font-size: 11px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
}

.unit-value {
    margin-top: 5px;

    font-size: 14px;

    font-weight: 900;
}

.unit .meta {
    margin-top: 4px;

    color: #717d93;

    font-size: 9px;

    line-height: 1.4;
}


/* =========================
   INSTRUCTIONS
========================= */

.instructions {
    margin-top: 18px;

    padding-top: 15px;

    border-top: 1px solid var(--border);

    display: flex;

    justify-content: center;

    gap: 25px;

    color: #69758b;

    font-size: 11px;
}

.instructions strong {
    color: #9da7b9;
}


/* =========================
   ABOUT
========================= */

.about-section {
    max-width: 750px;

    margin: 90px auto 20px;

    text-align: center;
}

.about-section h2 {
    margin-top: 8px;

    font-size: 30px;
}

.about-section p {
    margin-top: 15px;

    color: var(--muted);

    line-height: 1.8;

    font-size: 14px;
}


/* =========================
   FOOTER
========================= */

footer {
    border-top: 1px solid var(--border);

    background: #070a10;

    padding: 30px 20px;
}

.footer-content {
    max-width: 1200px;

    margin: auto;

    display: flex;

    justify-content: space-between;

    gap: 20px;
}

.footer-content strong {
    font-size: 13px;
}

.footer-content p {
    margin-top: 5px;

    color: #626d81;

    font-size: 11px;
}

.footer-right {
    color: #626d81;

    font-size: 11px;

    align-self: center;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    nav {
        display: none;
    }

    .hero {
        padding: 75px 20px;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .trade-container {
        grid-template-columns: 1fr;
    }

    .vs-container {
        margin: -3px 0;
    }

    .vs-circle {
        width: 45px;
        height: 45px;
    }

    .search-area {
        flex-direction: column;
    }

    .search-area select {
        width: 100%;

        height: 45px;
    }

    .unit-grid {
        grid-template-columns:
            repeat(
                3,
                minmax(0, 1fr)
            );
    }

    .unit-selector {
        padding: 15px;
    }

    .instructions {
        flex-direction: column;

        align-items: center;

        gap: 8px;
    }

    .footer-content {
        flex-direction: column;

        text-align: center;
    }
}

@media (max-width: 430px) {

    .unit-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );
    }

    main {
        padding-left: 12px;
        padding-right: 12px;
    }

    .hero h1 {
        font-size: 38px;
    }
}
