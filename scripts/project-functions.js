// Function to roll dice pairs for both player and computer
let dicePairs = [];
let count = 0;

function rollDice() {
    dicePairs = [];
    for (i = 0; i < 4; i++) {
        dicePairs.push(randomNumber());
        console.log(dicePairs);
    }

    const playerDiceImg = `
                          <img src="images/dice0${dicePairs[0]}.png" alt="Dice Value: ${dicePairs[0]}">
                          <img src="images/dice0${dicePairs[1]}.png" alt="Dice Value: ${dicePairs[1]}">
                           `;

    const computerDiceImg = `
                          <img src="images/dice0${dicePairs[2]}.png" alt="Dice Value: ${dicePairs[2]}">
                          <img src="images/dice0${dicePairs[3]}.png" alt="Dice Value: ${dicePairs[3]}">
                           `;
    $playerDice.html(playerDiceImg);
    $computerDice.html(computerDiceImg);
    calculateScore();
}

// Function to generate random number ranged from 1 to 6 inclusively
function randomNumber() {
    const min = 1;
    const max = 6;
    const difference = max - min;
    const randomNum = Math.round(Math.random() * difference + min);
    return randomNum;
}

// Function to calculate score
function calculateScore(discePairs) {
    player.firstDice = dicePairs[0];
    player.secondDice = dicePairs[1];
    computer.firstDice = dicePairs[2];
    computerDice2 = dicePairs[3];

    if (player.firstDice == player.secondDice) {
        player.score = (player.firstDice + player.secondDice) * 2;
    } else if (player.firstDice == 1 || player.secondDice == 1) {
        player.score = 0;
    } else {
        player.score = player.firstDice + player.secondDice;
    }

    player.totalScore += player.score;
    $playerScore.html(`Score: ${player.score}`);
    $playerTotalScore.html(`Total Score: ${player.totalScore}`);

    if (computer.firstDice == computerDice2) {
        computer.score = (computer.firstDice + computerDice2) * 2;
    } else if (computer.firstDice == 1 || computerDice2 == 1) {
        computer.score = 0;
    } else {
        computer.score = computer.firstDice + computerDice2;
    }

    computer.totalScore += computer.score;
    $computerScore.html(`Score: ${computer.score}`);
    $computerTotalScore.html(`Total Score: ${computer.totalScore}`);

    count += 1;
    if (count == 3) {
        $btnRoll.prop("disabled", true);
        judgeTheWinner();
    }
}

// Function to judge winner and loser
function judgeTheWinner() {
    let winner = "";
    if (player.totalScore > computer.totalScore) {
        winner = `<p>Winner: Player!</p><img src="images/winner-player.png" alt="Player">`;
    } else if (player.totalScore < computer.totalScore) {
        winner = `<p>Winner: Computer!</p><img src="images/winner-computer.png" alt="Computer">`;
    } else if (player.totalScore == computer.totalScore) {
        winner = `<p>Draw!! Try Again!`;
    }
    $result.slideDown().html(winner);
    setTimeout(function () {
        $result.hide();
    }, 3000);
};

// Function to Start a new game
function restart() {
    location.reload();
}

// Function to Display rule
function showRule() {
    $rule.show();
}

// Function to Hide rule
function hideRule() {
    $rule.hide();
}