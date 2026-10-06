const makeFallbackIcon = (label, bg = "#1f2937", fg = "#f8fafc") => {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="18" fill="${bg}"/>
            <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="${fg}" font-size="40" font-family="Arial, sans-serif" font-weight="700">${label}</text>
        </svg>
    `)}`;
};

const UNITS = [

    // =========================
    // MYTHICS
    // =========================

    {
        name: "Upgraded Titan Speakerman",
        value: 3,
        demand: 2,
        status: "Obsolete",
        category: "Mythics",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/3/37/Titan_Speaker_Man_2%270.webp/revision/latest?cb=20260821064002"
    },

    {
        name: "Titan Cinemaman",
        value: 3,
        demand: 3,
        status: "Obsolete",
        category: "Mythics",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/3/36/Titan_Cinema_Man.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Upgraded Titan Cameraman",
        value: 9,
        rap: 10,
        demand: 5,
        status: "Dropping",
        category: "Mythics",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/f/fd/Upgraded_Titan_Camera_Man.png/revision/latest?cb=20260927142217"
    },

    {
        name: "10M Titan Speakerman",
        value: 200,
        demand: 6,
        status: "Dropping",
        category: "Mythics",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/4/42/10M_Titan_Speaker_Man.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Glitch Cameraman",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Mythics",
        icon: "images/Glitch_Cameraman.png"
    },

    {
        name: "Camera Woman 2.0",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Mythics",
        icon: "images/Camera_Woman_2.0.png"
    },

    {
        name: "Speaker Woman 2.0",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Mythics",
        icon: "images/Speaker_Woman_2.0.png"
    },


    // =========================
    // OMEGA
    // =========================

    {
        name: "Upgraded Titan TV Man",
        value: 1000,
        demand: 10,
        status: "N/A",
        category: "Omega",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' fill='%230b0d12'/%3E%3Ccircle cx='256' cy='256' r='180' fill='%2347d4ff'/%3E%3Ccircle cx='256' cy='256' r='120' fill='%230b0d12'/%3E%3C/svg%3E"
    },


    // =========================
    // EXCLUSIVES
    // =========================

    {
        name: "Engineer",
        value: 500,
        demand: 8,
        status: "Unstable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/1/17/Engineer_Camera_Man.png/revision/latest?cb=20260816145242"
    },

    {
        name: "Large Scientist Cameraman",
        value: 1,
        demand: 2,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/b/b7/Large_Scientist_Camera_Man.png/revision/latest?cb=20260816145233"
    },

    {
        name: "Scientist Cameraman",
        value: 0,
        demand: 0,
        status: "Stable",
        category: "Exclusive",
        icon: makeFallbackIcon("SC")
    },

    {
        name: "DJ Speakerman",
        value: 40,
        demand: 7,
        status: "Dropping",
        category: "Exclusive",
        icon: makeFallbackIcon("DJ")
    },

    {
        name: "Titan Cameraman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: makeFallbackIcon("TC")
    },

    {
        name: "TV Woman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: makeFallbackIcon("TV")
    },

    {
        name: "Camera Helicopter",
        value: 120,
        demand: 6,
        status: "Dropping",
        category: "Exclusive",
        icon: makeFallbackIcon("CH")
    },

    {
        name: "Paid Scientist Crate",
        value: 3,
        demand: 5,
        status: "Stable",
        category: "Exclusive",
        icon: makeFallbackIcon("PS")
    },

    {
        name: "Free Scientist Crate",
        value: 2,
        demand: 3,
        status: "Stable",
        category: "Exclusive",
        icon: makeFallbackIcon("FS")
    },

    {
        name: "Golden Cameraman",
        value: 2400,
        demand: 9,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/d/d8/Golden_Camera_Man.png/revision/latest?cb=20260927141955"
    },

    {
        name: "Present Cameraman",
        value: 250,
        demand: 5,
        status: "Dropping",
        category: "Exclusive",
        icon: makeFallbackIcon("PC")
    },


    // =========================
    // EVENTS
    // =========================

    {
        name: "Party Cameraman",
        value: 0,
        demand: 0,
        status: "Obsolete",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/1/19/Party_Cameraman.png"
    },

    {
        name: "Jester Speakerman",
        value: 0,
        demand: 0,
        status: "Obsolete",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/c/c4/Jester_Speaker_Man.png/revision/latest?cb=20260816145243"
    },

    {
        name: "Party Titan TV Man",
        value: 70,
        demand: 5,
        status: "Obsolete",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/b/bc/Party_Titan_TV_Man.png/revision/latest?cb=20260816145243"
    },

    {
        name: "Builder",
        value: 450,
        demand: 10,
        status: "Fast Rising",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/4/49/Builder.png/revision/latest?cb=20260927142217"
    },

    {
        name: "10M Speakerman",
        value: 640,
        demand: 7,
        status: "Dropping",
        category: "Events",
        icon: makeFallbackIcon("10M")
    },

    {
        name: "Camera Prototype",
        value: 290,
        demand: 6,
        status: "Dropping",
        category: "Events",
        icon: makeFallbackIcon("CP")
    },

    {
        name: "Large Camera Prototype",
        value: 1200,
        demand: 8,
        status: "Dropping",
        category: "Events",
        icon: makeFallbackIcon("LCP")
    },

    {
        name: "Fisher Cameraman",
        value: 0,
        demand: 1,
        status: "Obsolete",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/4/4a/Fisher_Cameraman.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Pirate Large TV Man",
        value: 200,
        demand: 4,
        status: "Dropping",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/0/0d/Pirate_Large_TV_Man.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Poseidon Cameraman",
        value: 230,
        demand: 7,
        status: "Dropping",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/9/98/Poseidon_Cameraman.png/revision/latest?cb=20260927142217"
    }

];

