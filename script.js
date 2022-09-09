const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;

// const [gk, ...filedPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// function printGoals(...playerNames) {
//   console.log(`${playerNames}, they scored ${playerNames.length} goals`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// const goals = game.scored;

// printGoals(...goals);

// team1 < team2 && console.log("Team 1 is more likely to win");

// const scored = Object.entries(game.scored);

// for (const [key, value] of scored) {
//   console.log(`Goal ${Number(key) + 1}: ${value}`);
// }

// const avarage = Object.values(game.odds);
// let avarageSum = 0;

// for (const y of avarage) {
//   avarageSum += y / 3;
// }

// console.log(avarageSum);

// const oddsNice = Object.entries(game.odds);

// // for (const value of oddsNice) {
// //   value === 1.33 && console.log(`Odd of victory ${game.team1}: ${value}`);
// //   value === 3.25 && console.log(`Odd of draw: ${value}`);
// //   value === 6.5 && console.log(`Odd of victory ${game.team2}: ${value}`);
// // }

// for (const [team, odd] of oddsNice) {
//   const teamStr = team === "x" ? `Draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd} `);
// }

// const scorers = {};

// for (let x of game.scored) {
//   scorers[x]++ || (scorers[x] = 1);
// }

// console.log(scorers);

// Challenge 3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔄 Subtitution"],
  [47, "⚽ GOAL"],
  [61, "🔄 Subtitution"],
  [64, "🟡 Yellow Card"],
  [69, "🔴 red Card"],
  [70, "🔄 Subtitution"],
  [72, "🔄 Subtitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟡 Yellow Card"],
]);

const events = [...gameEvents.values()];

const eventsSet = new Set(events);

console.log(eventsSet);

gameEvents.delete(64);

console.log(gameEvents);

// for (let i = 0; i < 10; i++) {
//   console.log("Aneventhappened,on average, every 9 minutes");
// }

console.log(
  `An event happened,on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();

// console.log(time);
// const fullTime = time[time.length - 1];

console.log(
  `An event happened,on average, every ${time / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  let half = "";
  if (key <= 45) {
    half = "[FIRST HALF]";
    console.log(`${half}${key}: ${value}`);
  } else {
    half = "[SECOND HALF]";
    console.log(`${half}${key}: ${value}`);
  }
}
