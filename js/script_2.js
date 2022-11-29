const Variant = 9;

function generateTable() {
    Table_Gen = document.getElementById("Table_Gen");
    let table = document.createElement('table');

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            cell = document.createElement('td');
            let value = i * 6 + j + 1;
            cell.innerHTML = value;
            cell.id = value;
            row.appendChild(cell);
        };
        table.appendChild(row);
    };
    Table_Gen.appendChild(table);
};

function Random_Color() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

function cellRandom_Color(cell) {
    cell.style.backgroundColor = Random_Color();
};

function cellCurrent_Color(cell) {
    const color_tool = document.getElementById('color_tool');
    cell.style.backgroundColor = color_tool.value;
};

function cellsChange_Color() {
    const V = Variant;
    for (let j = V; j < 36; j+= 12) { 
        document.getElementById(j).style.backgroundColor = color_tool.value;
    };
};

generateTable();

my_cell = document.getElementById(Variant);
my_cell.addEventListener('mouseover', () => cellRandom_Color(my_cell));
my_cell.addEventListener('click', () => cellCurrent_Color(my_cell));
my_cell.addEventListener('dblclick', () => cellsChange_Color());