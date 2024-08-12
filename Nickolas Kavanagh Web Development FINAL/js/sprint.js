// Nickolas Kavanagh
// SD 12 Final Sprint 1
// Project 3 - JavaScript FINAL SPRINT
// July 30, 2024 - August 11, 2024

// Fetch data from data.json using fetch API
fetch('data/data.json')
  .then(response => response.json())
  .then(({ playerData }) => {
    console.log('Data from data.json:', playerData);
    displayPlayerData(playerData);
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to calculate player age
function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  return currentDate.getFullYear() - birthDate.getFullYear();
}

// Function to format salary
function formatSalary(salary) {
  return `$${salary.toLocaleString()}`;
}

// Function to display player data
function displayPlayerData(players) {
  const dataList = document.getElementById('playerdata');
  
  const playerHTML = players.map(player => `
    <li>
      <strong>${player.firstName} ${player.lastName}</strong>
      <ul>
        <li>Date of Birth: ${player.dateOfBirth}</li>
        <li>Age: ${calculateAge(player.dateOfBirth)}</li>
        <li>Jersey Number: ${player.jerseyNumber}</li>
        <li>Position: ${player.position}</li>
        <li>Current Team: ${player.team}</li>
        <li>2024 Salary: $${player.salary.toLocaleString()}</li>
        <li>Draft Info: ${player.draftData.draftYear}, Round ${player.draftData.draftRound}, Pick ${player.draftData.draftPick}</li>
      </ul>
    </li>
  `).join('');

  dataList.innerHTML = playerHTML;
}