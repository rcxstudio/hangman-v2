db.themes.insertMany([
  {
    theme: "videogames",
    themeBank: ["Sonic the Hedgehog", "Street Fighter", "Mortal Kombat", "Professor Layton", "Devil May Cry", "God of War", "Call of Duty", "Doom", "Sudoku", "Mega Man", "Super Mario Bros", "Mario Kart"]
  },
  {
    theme: "fantasy",
    themeBank: ["dragons", "castles", "princes", "princesses", "warlocks", "wizards", "witches", "trolls", "elves", "gnomes", "swords", "knights", "magic"]
  },
  {
    theme: "scifi",
    themeBank: ["lasers", "spaceships", "lightsabers", "Star Wars", "Star Trek", "Firefly", "aliens"]
  },
  {
    theme: "programming",
    themeBank: ["sleepy", "frustrating", "happy", "envigorating", "languages", "database", "backend", "frontend", "developer", "engineer", "node", "JavaScript", "Hypertext Markup Language"]
  }
]);

//testing as objects
// db.themes.insertMany([
//   {
//     theme: "videogames",
//     themeBank: {
//       "Sonic the Hedgehog": 0,
//       "Street Fighter": 0,
//       "Mortal Kombat": 0,
//       "Professor Layton": 0,
//       "Devil May Cry": 0,
//       "God of War": 0,
//       "Call of Duty": 0,
//       "Doom": 0,
//       "Sudoku": 0,
//       "Mega Man": 0,
//       "Super Mario Bros": 0,
//       "Mario Kart": 0
//     }
//   },
//   {
//     theme: "fantasy",
//     themeBank: {
//       "dragons": 0,
//       "castles": 0,
//       "princes": 0,
//       "princesses": 0,
//       "warlocks": 0,
//       "wizards": 0,
//       "witches": 0,
//       "trolls": 0,
//       "elves": 0,
//       "gnomes": 0,
//       "swords": 0,
//       "knights": 0,
//       "magic": 0
//     }
//   }
// ])
