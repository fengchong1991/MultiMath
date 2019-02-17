function startGame() {

    let playerName: string | undefined = getInputValue('playername');

    logPlayer(playerName);

    let msgEl: HTMLElement | null = document.getElementById('messages');
    msgEl!.innerHTML = 'welcome to the math game frome Chong Feng';
    console.log("test math game");

    postScore(80);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`new game starting for player: ${name}`);
} 

function getInputValue(elementId: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if(inputElement.value === '') {
        return undefined;
    }else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'multimath player' ): void {
    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerHTML = `${score} - ${playerName}`;
}