// Objects
const player = {
    name: "Player",
    firstDice: 0,
    secondDice: 0,
    score: 0,
    totalScore: 0
}

const computer = {
    name: "Computer",
    firstDice: 0,
    secondDice: 0,
    score: 0,
    totalScore: 0
}

// Variables
const $playerDice = $("#player-dice");
const $computerDice = $("#computer-dice");
const $playerScore = $("#player-score");
const $computerScore = $("#computer-score");
const $playerTotalScore = $("#player-total-score");
const $computerTotalScore = $("#computer-total-score");
const $rule = $("#rule");
const $result = $("#result");
const $btnRule = $(".btn-rule");
const $btnClose = $("#btn-close")
const $btnRoll = $(".btn-rolldice");
const $btnRestart = $(".btn-restart");

// Buttons
$btnRoll.on("click", rollDice);
$btnRestart.on("click", restart);
$btnRule.on("click", showRule);
$btnClose.on("click", hideRule);

$rule.hide();
$result.hide();
