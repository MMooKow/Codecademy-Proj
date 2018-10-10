//Setting up team object with players and games lists. Getter methods created as well.
const team = {
  _players: [{firstName: 'Bob',
              lastName: 'Franklin',
              age: 56},
            {firstName: 'Ben',
             lastName: 'Grim',
             age: 30},
             {firstName: 'John',
              lastName: 'Bobson',
              age: 25}],
  _games: [{opponent: 'Bulldogs',
            teamPoints: 42, 
            opponentPoints: 27},
           {opponent: 'Peppercorns',
            teamPoints: 29,
            opponentPoints: 38},
           {opponent: 'Seahorses',
            teamPoints: 49,
            opponentPoints: 36}],
  get players() {
    if (this._players.length === 0){
     return 'Please enter values for firstName, lastName, and age.';
    }else{
      return this._players;
    }
    },
  get games() {
    if (this._games.length === 0){
      return 'Please enter a value for opponent, teamPoints, and opponentPoints.'
    }else{
      return this._games
    }
  },
  //Adding methods to handle adding new players and games.
 addPlayer(firstName, lastName, age) {
  team._players.push( {
    firstName,
    lastName,
    age
  });
},
  addGame(opponent, teamPoints, opponentPoints) {
    team._games.push({
      opponent,
      teamPoints,
      opponentPoints
    })
  }
  };
//Using new methods to add 3 players and 3 games to the team and printing the new team.
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44 );
team.addPlayer('Bugs', 'Buny', 76);
console.log(team.players);
team.addGame('Wolves', 39, 60);
team.addGame('Eales', 58, 53);
team.addGame('Sneaky Snecks', 49, 50);
console.log(team.games);