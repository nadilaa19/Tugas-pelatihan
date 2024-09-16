// Data array
const footballPlayer = [
    {
        name: 'Christiano Ronaldo',
        team: 'Juventus'
    },
    {
        name: 'Aubameyang',
        team: 'Arsenal'
    }
];

const koreanDrama = [
    {
        title: 'Reply 1988',
        year: 2015
    },
    {
        title: 'Itaewon Class',
        year: 2020
    }
];

// Function to save footballPlayer to session storage
function saveFootballer() {
    const footBaller = JSON.stringify(footballPlayer);
    sessionStorage.setItem('footballPlayer', footBaller);
}

// Function to save koreanDrama to session storage
function saveKDrama() {
    const kDrama = JSON.stringify(koreanDrama);
    sessionStorage.setItem('kDrama', kDrama);
}

// Function to clear all data from session storage
function clearAll() {
    sessionStorage.clear();
    console.log('all clear!');
}

// Adding event listeners to buttons
document.getElementById('saveFootballButton').addEventListener('click', saveFootballer);
document.getElementById('saveKDramaButton').addEventListener('click', saveKDrama);
document.getElementById('clearAllButton').addEventListener('click', clearAll);
