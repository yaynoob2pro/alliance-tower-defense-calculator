const UNITS = [

    /* =========================
       MYTHIC
    ========================= */

  {
    name: "Upgraded Titan Speakerman",
    value: 3,
    demand: 2,
    status: "Obsolete",
    category: "Mythic",
    icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959264525164544/IMG_4341.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=8b630be0f22874ac7d5c58eb33e548ff92f5679a2a646a13f9e2acb53a8a6f0d&"
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
        demand: 5,
        status: "Dropping",
        category: "Mythics",
        icon: "https://cdn.discordapp.com/emojis/1550562313650835538.webp?size=128"
    },

    {
        name: "10M Titan Speakerman",
        value: 200,
        demand: 6,
        status: "Dropping",
        category: "Mythics",
        icon: "https://cdn.discordapp.com/emojis/1550562416834781224.webp?size=128"
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
{
    name: "Glitch Plunger",
    value: 1,
    demand: 1,
    status: "N/A",
    category: "Mythics",
    icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959263480909936/IMG_4340.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=d3163dde0a6f1d5b80c3803fc4ca7cf5ec653c445306f726772134c6def06302&"
},


    /* =========================
       OMEGA
    ========================= */

    {
        name: "Upgraded Titan TV Man",
        value: 1000,
        demand: 10,
        status: "N/A",
        category: "Omega",
        icon: "https://cdn.discordapp.com/attachments/1549863063455531111/1555959264525164544/IMG_4341.PNG?backend=b2&ex=6ac3bcfc&is=6ac26b7c&hm=8b630be0f22874ac7d5c58eb33e548ff92f5679a2a646a13f9e2acb53a8a6f0d&"
    },


    /* =========================
       EXCLUSIVE
    ========================= */

    {
        name: "Engineer",
        value: 500,
        demand: 8,
        status: "Unstable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1537086331316863036.webp?size=128"
    },

    {
        name: "Large Scientist Cameraman",
        value: 1,
        demand: 2,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1537086427190526042.webp?size=128"
    },

    {
        name: "Scientist Cameraman",
        value: 0,
        demand: 0,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1537086382659338290.webp?size=128"
    },

    {
        name: "DJ Speakerman",
        value: 40,
        demand: 7,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1542612325125857310.webp?size=128"
    },

    {
        name: "Titan Cameraman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1533745443866021898.webp?size=128"
    },

    {
        name: "TV Woman",
        value: 60,
        demand: 8,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1540032231672905730.webp?size=128"
    },

    {
        name: "Camera Helicopter",
        value: 120,
        demand: 6,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1553672975167782973.webp?size=128"
    },

    {
        name: "Paid Scientist Crate",
        value: 3,
        demand: 5,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1539658602887909396.webp?size=128"
    },

    {
        name: "Free Scientist Crate",
        value: 2,
        demand: 3,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1539658602887909396.webp?size=128"
    },

    {
        name: "Golden Cameraman",
        value: 2400,
        demand: 9,
        status: "Stable",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1542612325125857310.webp?size=128"
    },

    {
        name: "Present Cameraman",
        value: 250,
        demand: 5,
        status: "Dropping",
        category: "Exclusive",
        icon: "https://cdn.discordapp.com/emojis/1550562355925094440.webp?size=128"
    },


    /* =========================
       EVENT
    ========================= */

    {
        name: "Party Cameraman",
        value: 0,
        demand: 0,
        status: "Obsolete",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1539658573573918810.webp?size=128"
    },

    {
        name: "Jester Speakerman",
        value: 0,
        demand: 0,
        status: "Obsolete",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1537790243724468224.webp?size=128"
    },

    {
        name: "Party Titan TV Man",
        value: 70,
        demand: 5,
        status: "Obsolete",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1537790243724468224.webp?size=128"
    },

    {
        name: "Builder",
        value: 450,
        demand: 10,
        status: "Fast Rising",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1545494618475470878.webp?size=128"
    },

    {
        name: "10M Speakerman",
        value: 640,
        demand: 7,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1550562442130628658.webp?size=128"
    },

    {
        name: "Camera Prototype",
        value: 290,
        demand: 6,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1553092934247911586.webp?size=128"
    },

    {
        name: "Large Camera Prototype",
        value: 1200,
        demand: 8,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1553092900148084866.webp?size=128"
    },

    {
        name: "Fisher Cameraman",
        value: 0,
        demand: 1,
        status: "Obsolete",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1553093011624173719.webp?size=128"
    },

    {
        name: "Pirate Large TV Man",
        value: 200,
        demand: 4,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1553093035561193602.webp?size=128"
    },

    {
        name: "Poseidon Cameraman",
        value: 230,
        demand: 7,
        status: "Dropping",
        category: "Events",
        icon: "https://cdn.discordapp.com/emojis/1553093011624173719.webp?size=128"
    }

];
