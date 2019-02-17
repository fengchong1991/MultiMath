function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    var msgEl = document.getElementById('messages');
    msgEl.innerHTML = 'welcome to the math game frome Chong Feng';
    console.log("test math game");
    postScore(80);
}
document.getElementById('startGame').addEventListener('click', startGame);
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("new game starting for player: " + name);
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'multimath player'; }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerHTML = score + " - " + playerName;
}
//# sourceMappingURL=app.js.map