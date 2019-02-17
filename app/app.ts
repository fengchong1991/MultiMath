function startGame() {
    var msgEl = document.getElementById('messages');
    msgEl.innerHTML = 'welcome to the math game frome Chong';
    console.log("test math game");
}

document.getElementById('startGame').addEventListener('click', startGame);

