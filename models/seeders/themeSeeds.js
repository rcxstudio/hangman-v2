db.themes.insertMany([
  {
    theme: 'videogames',
    themeBank: ['Sonic the Hedgehog', 'Street Fighter', 'Mortal Kombat', 'Professor Layton', 'Devil May Cry', 'God of War', 'Call of Duty', 'Doom', 'Sudoku', 'Mega Man', 'Super Mario Bros', 'Mario Kart']
  },
  {
    theme: 'fantasy',
    themeBank: ['dragons', 'castles', 'princes', 'princesses', 'warlocks', 'wizards', 'witches', 'trolls', 'elves', 'gnomes', 'swords', 'knights', 'magic']
  },
  {
    theme: 'scifi',
    themeBank: ['lasers', 'spaceships', 'lightsabers', 'Star Wars', 'Star Trek', 'Firefly', 'aliens']
  },
  {
    theme: 'programming',
    themeBank: ['sleepy', 'frustrating', 'happy', 'envigorating', 'languages', 'database', 'backend', 'frontend', 'developer', 'engineer', 'node', 'JavaScript', 'Hypertext Markup Language']
  }
]);


//testing as objects
// db.themes.insertMany([
//   {
//     theme: 'videogames',
//     themeBank: {
//       'Sonic the Hedgehog': false,
//       'Street Fighter': false,
//       'Mortal Kombat': false,
//       'Professor Layton': false,
//       'Devil May Cry': false,
//       'God of War': false,
//       'Call of Duty': false,
//       'Doom': false,
//       'Sudoku': false,
//       'Mega Man': false,
//       'Super Mario Bros': false,
//       'Mario Kart': false
//     }
//   },
//   {
//     theme: 'fantasy',
//     themeBank: {
//       'dragons': false,
//       'castles': false,
//       'princes': false,
//       'princesses': false,
//       'warlocks': false,
//       'wizards': false,
//       'witches': false,
//       'trolls': false,
//       'elves': false,
//       'gnomes': false,
//       'swords': false,
//       'knights': false,
//       'magic': false
//     }
//   }
// ])
