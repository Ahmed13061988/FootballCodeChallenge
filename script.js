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

const scores = Object.entries(game.scored);

for (const [key, value] of scores) {
  console.log(`Goal ${Number(key) + 1}: ${value}`);
}

const avarage = Object.values(game.odds);
let avarageSum = 0;

for (const y of avarage) {
  avarageSum += y / 3;
}

console.log(avarageSum);

const oddsNice = Object.entries(game.odds);
