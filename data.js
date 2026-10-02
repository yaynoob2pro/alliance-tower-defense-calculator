const UNITS = [
  {
    "id": "engineer",
    "name": "Engineer",
    "category": "Units",
    "value": 40000,
    "demand": 10,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1537086331316863036.webp?size=128"
  },
  {
    "id": "large_camera_man",
    "name": "Large Camera Man",
    "category": "Units",
    "value": 100,
    "demand": 2,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1537086427190526042.webp?size=128"
  },
  {
    "id": "scientist_camera_man",
    "name": "Scientist Camera Man",
    "category": "Units",
    "value": 4,
    "demand": 1,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1537086382659338290.webp?size=128"
  },
  {
    "id": "dj_speakerman",
    "name": "DJ Speakerman",
    "category": "Units",
    "value": 2300,
    "demand": 7,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1542612325125857310.webp?size=128"
  },
  {
    "id": "titan_cameraman",
    "name": "Titan Cameraman",
    "category": "Units",
    "value": 3400,
    "demand": 8,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1533745443866021898.webp?size=128"
  },
  {
    "id": "tv_woman",
    "name": "TV Woman",
    "category": "Units",
    "value": 3400,
    "demand": 8,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1540032231672905730.webp?size=128"
  },
  {
    "id": "camera_helicopter",
    "name": "Camera Helicopter",
    "category": "Units",
    "value": 7500,
    "demand": 10,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1553672975167782973.webp?size=128"
  },
  {
    "id": "scientist_crate_paid",
    "name": "Scientist Crate (Paid)",
    "category": "Units",
    "value": 200,
    "demand": 5,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1539658602887909396.webp?size=128"
  },
  {
    "id": "scientist_crate_free",
    "name": "Scientist Crate (Free)",
    "category": "Units",
    "value": 100,
    "demand": 3,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1539658602887909396.webp?size=128"
  },
  {
    "id": "10m_titan_speaker_man",
    "name": "10M Titan Speaker Man",
    "category": "Events",
    "value": 30000,
    "demand": 6,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1550562416834781224.webp?size=128"
  },
  {
    "id": "10m_speaker_man",
    "name": "10M Speaker Man",
    "category": "Events",
    "value": 60000,
    "demand": 10,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1550562442130628658.webp?size=128"
  },
  {
    "id": "party_titan_tv_man",
    "name": "Party Titan TV Man",
    "category": "Events",
    "value": 5200,
    "demand": 8,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1537790243724468224.webp?size=128"
  },
  {
    "id": "party_crate",
    "name": "Party Crate",
    "category": "Events",
    "value": 20,
    "demand": 3,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1539658573573918810.webp?size=128"
  },
  {
    "id": "builder_cameraman",
    "name": "Builder Cameraman",
    "category": "Events",
    "value": 6000,
    "demand": 6,
    "status": "Rising",
    "icon": "https://cdn.discordapp.com/emojis/1545494618475470878.webp?size=128"
  },
  {
    "id": "present_cameraman",
    "name": "Present Cameraman",
    "category": "Events",
    "value": 35000,
    "demand": 7,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1550562355925094440.webp?size=128"
  },
  {
    "id": "pirate_large_tv_man",
    "name": "Pirate Large TV Man",
    "category": "Events",
    "value": 42000,
    "demand": 4,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1553093035561193602.webp?size=128"
  },
  {
    "id": "golden_cameraman",
    "name": "Golden Cameraman",
    "category": "Events",
    "value": 120000,
    "demand": 6,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1553672294348623942.webp?size=128"
  },
  {
    "id": "large_camera_prototype",
    "name": "Large Camera Prototype",
    "category": "Events",
    "value": 83000,
    "demand": 10,
    "status": "Hyped",
    "icon": "https://cdn.discordapp.com/emojis/1553092900148084866.webp?size=128"
  },
  {
    "id": "poseidon_cameraman",
    "name": "Poseidon Cameraman",
    "category": "Events",
    "value": 40000,
    "demand": 2,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1553093011624173719.webp?size=128"
  },
  {
    "id": "camera_prototype",
    "name": "Camera Prototype",
    "category": "Events",
    "value": 38000,
    "demand": 10,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1553092934247911586.webp?size=128"
  },
  {
    "id": "titan_speakerman_20",
    "name": "Titan Speakerman 2.0",
    "category": "Mythics",
    "value": 250,
    "demand": 7,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1540031687935926344.webp?size=128"
  },
  {
    "id": "titan_cinema_20",
    "name": "Titan Cinema 2.0",
    "category": "Mythics",
    "value": 350,
    "demand": 8,
    "status": "Stable",
    "icon": "https://cdn.discordapp.com/emojis/1545494568517111889.webp?size=128"
  },
  {
    "id": "upgraded_titan_cameraman",
    "name": "Upgraded Titan Cameraman",
    "category": "Mythics",
    "value": 600,
    "demand": 5,
    "status": "Dropping",
    "icon": "https://cdn.discordapp.com/emojis/1550562313650835538.webp?size=128"
  }
];
