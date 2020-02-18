const weightInput = document.getElementsByClassName(".weight-form");
const heightInput = document.getElementsByClassName('.height-form');
const submit = document.getElementsByClassName('.form-button');

function inputs(e) {
    e.preventDefault();
    const weightInputText = document.querySelector('[name=weight').value;
    const heightInputText = document.querySelector('[name=height').value
    if (weightInputText == null || undefined) {
        return `weightInputText.createElement(p).appendChild(.weightInput)`;
    }
    //console.log(weightInputText);
    //console.log(heightInputText);
}

function calculation() {
    const result = parseInt()
}
let output = (weightInput = [], heightInput = []) => {
    return ``
}

function toggleSubmit(e) {
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        inputs;
    });
}

function createTableOfOutputs() {}