//seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
//titulo
const multiplicationTitle = document.querySelector("#multiplication-title span");

//tabela

const multiplicationTable = document.querySelector("#multiplication-operations");

// funções

const createTable = (number, multiplicatorNumber) => {

    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        
        
        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;

            const parser = new DOMParser();
            //tranferindo o template para um elemento html
            const htmlTemplate = parser.parseFromString(template, "text/html");
            const row = htmlTemplate.querySelector(".row");

            multiplicationTable.appendChild(row);
            //que ira adicionar a linha criada na tabela
    }

    multiplicationTitle.innerText = number;
    //aqui o titulo da tabela irá receber o numero multiplicado, para ficar mais claro para o usuário
};

// eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;
    //os valores do input são string, por isso o + para converter para number
    if (!multiplicationNumber || !multiplicatorNumber) return;


    createTable(multiplicationNumber, multiplicatorNumber);
});

