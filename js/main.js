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
    
    //checks for the length of the value
   
    //the instantiated object
    const table = {
        name: [],
        weight: [],
        height: [],
        added: false
    }
    //passes the values gotten into the object declaration
    table.name.push(name);
    table.weight.push(weightValue);
    table.height.push(heightValue);

    //bidning the object to the local Storage
    localStore.push(table);

    //to create the table
    tableConstruct(localStore, outputTable);

    localStorage.setItem("values",JSON.stringify(table));

}

let localStore = localStorage.getItem("table") || []

//responsible for creation of the table 
function tableConstruct(inputs = [], outputs) {
   outputs.innerHTML = inputs
        .map((input) => {
            return `
        <div class="heading-table">
            <th class="weight-table">Weight</th>
            <th class="height-table">Height</th>
            <tr>
                <td>${input.weight}</td>
                <td>${input.height}</td>
            </tr>

            <span data-text="${input.name}" class="deletion">&#x2715</span>
        </div>
        `;
        })
    .join('');
}


function toggleSubmit(e) {
    e.preventDefault()
    console.log(Values());
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('System DOM has been set')
})
mainForm.addEventListener("submit", toggleSubmit);