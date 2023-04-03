let competitions = [
  ["html", "C#"],
  ["C#", "Python"],
  ["Python", "html"],
];
let results = [0, 0, 1];
 
function tournamentWinner(competitions, results) {
  const teamPoints = {}; // Object to store each team's total points

  // Loop through each teams
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    //chek for the winner if 1 then home team other wise awayteam
    const winner = results[i] === 1 ? homeTeam : awayTeam;

    // Update the winning team's points
    if (teamPoints[winner]) {
      teamPoints[winner] += 3;
    } else {
      teamPoints[winner] = 3;
    }
  }

  let winner = "";
  let maxPoints = 0;

  // Loop through each team's total points to determine the winner
  for (const [team, points] of Object.entries(teamPoints)) {
    if (points > maxPoints) {
      winner = team;
      //maxPoints = points;
    }
  }
  return winner;
}

console.log(tournamentWinner(competitions, results));
