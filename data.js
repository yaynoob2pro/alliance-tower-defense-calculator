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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/9/9d/Upgraded_Titan_Speaker_Man.png"
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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/f/f8/Upgraded_Titan_Camera_Man.png"
    },

    {
        name: "10M Titan Speakerman",
        value: 200,
        demand: 6,
        status: "Dropping",
        category: "Mythics",
        icon: "https://media.discordapp.net/attachments/1549863063455531111/1555959260842819599/IMG_4338.PNG?ex=6ac50e7c&is=6ac3bcfc&hm=fe9b81e0acb4152f8960ce90ad8b37375d263eb9feef64b3cf3857f6ce51b18f[...]"
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
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' fill='%230b0d12'/%3E%3Ccircle cx='256' cy='256' r='150' fill='%236d7cff'/%3E%3Ctext x='256' y='268' text-anchor='middle' font-family='Arial, sans-serif' font-size='34' fill='white'%3ETV MAN%3C/text%3E%3C/svg%3E"
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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/e/e7/Engineer.png"
    },

    {
        name: "Large Scientist Cameraman",
        value: 1,
        demand: 2,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/0/00/Large_Scientist_Cameraman.png"
    },

    {
        name: "Scientist Cameraman",
        value: 0,
        demand: 0,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/4/41/Scientist_Cameraman.png"
    },

    {
        name: "DJ Speakerman",
        value: 40,
        demand: 7,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/3/30/DJ_Speakerman.png"
    },

    {
        name: "Titan Cameraman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/f/f8/Upgraded_Titan_Camera_Man.png"
    },

    {
        name: "TV Woman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/9/9f/TV_Woman.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Camera Helicopter",
        value: 120,
        demand: 6,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/f/f5/Camera_Helicopter.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Paid Scientist Crate",
        value: 3,
        demand: 5,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/0/00/Large_Scientist_Cameraman.png"
    },

    {
        name: "Free Scientist Crate",
        value: 2,
        demand: 3,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/0/00/Large_Scientist_Cameraman.png"
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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/d/dd/Party_Camera_Man.png/revision/latest?cb=20260816145242"
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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/8/8d/10M_Speakerman.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Camera Prototype",
        value: 290,
        demand: 6,
        status: "Dropping",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/5/5d/Camera_Prototype.png"
    },

    {
        name: "Large Camera Prototype",
        value: 1200,
        demand: 8,
        status: "Dropping",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/1/17/Large_Camera_Prototype.png"
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
