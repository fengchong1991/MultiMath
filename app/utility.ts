export { getInputValue as getValue, logger}

function getInputValue(elementId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}
