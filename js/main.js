const weightInput = document.getElementById("weight-form");
const heightInput = document.getElementById("height-form");
const outputTable = document.getElementById("output-area");

const submit = document.querySelector('#form-button');
const mainForm = document.querySelector('#form-content');

//getting values from the form field
function Values() {
    let name = document.getElementById('name-form').value;
    let weightValue = weightInput.value;
    let heightValue = heightInput.value;

    //the instantiated object
    const table = {
        name: [],
        weight: [],
        height: [],
        added: false
    }

    //checks for the length of the value
    let standardLength = 3;
    //if (table.prototype.length <= standardLength) {
    //    //then after the check passes the values to the object declaration
    //    table.name.push(name);
    //    table.weight.push(weightValue);
    //    table.height.push(heightValue);
    //} else {
    //    throw new Error('This is above the standard length')
    //}
    //passes the values gotten into the object declaration
    table.name.push(name);
    table.weight.push(weightValue);
    table.height.push(heightValue);

    //bidning the object to the local Storage
    localStore.push(table);

    //to create the table
    tableConstruct(localStore, outputTable);

    localStorage.setItem("values", JSON.stringify(table));

}

let localStore = localStorage.getItem("table") || []

//responsible for creation of the table 
function tableConstruct(inputs = [], outputs) {
    outputs.innerHTML = inputs
        .map((input) => {
            return `
                <tr>
                    <td class="weight-table weight-values">${input.weight}</td>
                    <td class="height-table height-values">${input.height}</td>
                
                    <span data-text="${input.name}"></span>
                </tr>
        `;
        })
        .join('');
}


function toggleSubmit(e) {
    e.preventDefault()
    return Values();
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('System DOM has been set')
})
mainForm.addEventListener("submit", toggleSubmit);