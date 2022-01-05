let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// This function will be called at the start of each new round in order to generate the new secret target number.:
function generateTarget() {
return Math.floor(Math.random()*10);
};

//This function will be called each round to determine which guess is closest to the target number.
function compareGuesses(humanGuess,computerGuess,secretTargetNumber) {
let deltaHuman = Math.abs((humanGuess - secretTargetNumber));
let deltaComputer = Math.abs((computerGuess - secretTargetNumber));
if (deltaHuman < deltaComputer || deltaHuman === deltaComputer) {
    return true;
} else if (deltaHuman > deltaComputer) {
    return false;
}
};

//This function will be used to correctly increase the winner’s score after each round.
const updateScore = (winner) => {
if (winner === 'human') {
    humanScore +=1;
}else if(winner === 'computer') {
    computerScore = computerScore + 1;
}
};

//This function will be used to update the round number after each round.
function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1;
};

// Testing the score
updateScore('human');
console.log(humanScore);

updateScore('computer');
console.log(computerScore);