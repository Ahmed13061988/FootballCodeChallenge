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

const players1 = game.players[0];
const players2 = game.players[1];

let gkTeam1 = "";
let fieldPlayersTeam1 = [];

for (let i = 0; i < players1.length; i++) {
  if (i === 0) {
    gkTeam1 = players1[i];
  } else {
    fieldPlayersTeam1.push(players1[i]);
  }
}

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const team1 = game.odds.team1;
const team2 = game.odds.team2;
const draw = game.odds.x;

function printGoals(...playerNames) {
  console.log(`${playerNames}, they scored ${playerNames.length} goals`);
}

const winner = game.team1 < game.team2 || game.team1 > game.team2;

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
