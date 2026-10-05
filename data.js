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
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959264525164544/IMG_4341.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=8b630be0f22874ac7d5c58eb33e548ff92f5679a2a646a13f9e2acb53a8a6f0d&"
    },

    {
        name: "Glitch Cameraman",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Mythics",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959263480909936/IMG_4340.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=d3163dde0a6f1d5b80c3803fc4ca7cf5ec653c445306f726772134c6def06302&"
    },

    {
        name: "Camera Woman 2.0",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Mythics",
        icon: "https://media.discordapp.net/attachments/1549863063455531111/1555959260842819599/IMG_4338.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=ec760f19b40444ab5b40291dfd1ff409c09651f824c3b76cc93c13f28fef65b9&=&format=webp&quality=lossless&width=693&height=693"
    },

    {
        name: "Speaker Woman 2.0",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Mythics",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959262642045079/IMG_4339.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=ebc89daba3d70e0080aa2067ed0737959574c96ddf16dcfd9d8141b0c01fd7d5"
    },


    // =========================
    // OMEGA
    // =========================

    {
        name: "Upgraded Titan TV Man",
        value: 1,
        demand: 1,
        status: "N/A",
        category: "Omega",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959264525164544/IMG_4341.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=8b630be0f22874ac7d5c58eb33e548ff92f5679a2a646a13f9e2acb53a8a6f0d&"
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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/b/b7/Large_Scientist_Camera_Man.png/revision/latest?cb=20260816145233"
    },

    {
        name: "DJ Speakerman",
        value: 40,
        demand: 7,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959262642045079/IMG_4339.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=ebc89daba3d70e0080aa2067ed0737959574c96ddf16dcfd9d8141b0c01fd7d5"
    },

    {
        name: "Titan Cameraman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/f/fd/Upgraded_Titan_Camera_Man.png/revision/latest?cb=20260927142217"
    },

    {
        name: "TV Woman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: "https://media.discordapp.net/attachments/1549863063455531111/1555959260842819599/IMG_4338.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=ec760f19b40444ab5b40291dfd1ff409c09651f824c3b76cc93c13f28fef65b9&=&format=webp&quality=lossless&width=693&height=693"
    },

    {
        name: "Camera Helicopter",
        value: 120,
        demand: 6,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959263480909936/IMG_4340.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=d3163dde0a6f1d5b80c3803fc4ca7cf5ec653c445306f726772134c6def06302&"
    },

    {
        name: "Paid Scientist Crate",
        value: 3,
        demand: 5,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/b/b7/Large_Scientist_Camera_Man.png/revision/latest?cb=20260816145233"
    },

    {
        name: "Free Scientist Crate",
        value: 2,
        demand: 3,
        status: "Stable",
        category: "Exclusive",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/b/b7/Large_Scientist_Camera_Man.png/revision/latest?cb=20260816145233"
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
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/d/dd/Party_Camera_Man.png/revision/latest?cb=20260816145242"
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
        icon: "https://media.discordapp.net/attachments/1549863063455531111/1550876099766919319/cachedMedia.png?ex=6ac3b3ec&is=6ac2626c&hm=73b3f841eaaeb257a6bb6da3bbf66252b28838d2ce6d58e52cec5b2591ddd4f8&=&format=webp&quality=lossless&width=693&height=693"
    },

    {
        name: "10M Speakerman",
        value: 640,
        demand: 7,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959262642045079/IMG_4339.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=ebc89daba3d70e0080aa2067ed0737959574c96ddf16dcfd9d8141b0c01fd7d5"
    },

    {
        name: "Camera Prototype",
        value: 290,
        demand: 6,
        status: "Dropping",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/f/fd/Upgraded_Titan_Camera_Man.png/revision/latest?cb=20260927142217"
    },

    {
        name: "Large Camera Prototype",
        value: 1200,
        demand: 8,
        status: "Dropping",
        category: "Events",
        icon: "https://static.wikia.nocookie.net/alliance-tower-defense/images/b/b7/Large_Scientist_Camera_Man.png/revision/latest?cb=20260816145233"
    },

    {
        name: "Fisher Cameraman",
        value: 0,
        demand: 1,
        status: "Obsolete",
        category: "Events",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555269915961729155/Fisher.png?backend=b2&ex=6ac3ddfb&is=6ac28c7b&hm=5ce86be7fadc712dc5a2292bb50a199f68cf304d4e06d2ab7f9ac3140972c44b&"
    },

    {
        name: "Pirate Large TV Man",
        value: 200,
        demand: 4,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555269914439323798/pirate.png?backend=b2&ex=6ac3ddfb&is=6ac28c7b&hm=4ed5a49afe69da33a527b3236fe5c8403ea5f59d2133b22aa60a6780c927b03f&"
    },

    {
        name: "Poseidon Cameraman",
        value: 230,
        demand: 7,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555269915227983892/p.png?backend=b2&ex=6ac3ddfb&is=6ac28c7b&hm=c2f81eab2644b8f8f3fdd9f39568c453680a974576693c9c37e373634b1fecc5&"
    }

];
