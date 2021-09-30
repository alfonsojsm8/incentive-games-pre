// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code 
 const showPlayers = (players) => { 
     players.forEach((item, index)=> { 
         console.log("PLAYER " +index+ "\n NAME: " + item.name+ "\n LASTNAME: " +item.lastname + "\n POSITION: " + item.position); 
     });
}

//showPlayers(data.getPlayers());



/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
const compareNames = (itemA, itemB) => {
    return itemA.name.length - itemB.name.length;
    
}

//showPlayers(data.getPlayers().sort(compareNames));


/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals 
 * Output example -> Goals per match: 2.19
 */

// Your code
const averageGoals = (players) => {
    let totalAverage = 0;
    players.forEach((item, index)=> { 
        totalAverage = item.scoringChance / 100 + totalAverage;
    });
    return Math.round(totalAverage * 100) / 100
}

//let numberOfGoals = averageGoals(data.getPlayers());
//console.log("Goals per match for all players:  " + numberOfGoals);



/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code
const findThePlayer = (playerName, players) => {
    let rigthplayer = players.filter((player)=>{
        return player.name == playerName;
    });
    showPlayers(rigthplayer);
}
//findThePlayer("Diego", data.getPlayers());


/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

const splitTeams = (players, teamA, teamB) => {

    if(players.length % 2 != 0)
        console.log("Can not split in two teams with same number of players");
    else{
        while(players.length > 0){
            player = players.pop();
            if(teamA.length >= countPlayers/2){
                teamB.push(player);
            }
            else{
                if(teamB.length >= countPlayers/2){
                    teamA.push(player);
                }
                else{
                    let whatTeam = Math.round(Math.random());
                    if(whatTeam == 1){
                        teamA.push(player);
                    }
                    else{
                        teamB.push(player);
                    }
                }
            }
                        
        }
    }
}

const showMathPreview = (equipoA, equipoB)=> {
    console.log("TEAM A");
    console.log(" The average score for teams A is: " + averageGoals(equipoA));
    console.log("LINEUP")
    showPlayers(equipoA);
    console.log("--------------------------------");
    console.log("TEAM B");
    console.log(" The average score for teams A is: " + averageGoals(equipoB));
    console.log("LINEUP")
    showPlayers(equipoB);
}

let equipoA = [];
let equipoB = [];
splitTeams(data.getPlayers(), equipoA, equipoB);
showMathPreview(equipoA, equipoB);
