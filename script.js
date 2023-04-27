const container = document.querySelector("#container");
const colorPicker = document.querySelector('#colorPicker');
let defaultColor = document.querySelector('#colorPicker').value;

function setUpGrid(col, row) {
    container.style.setProperty('--grid-col', col);
    container.style.setProperty('--grid-row', row);
    
    for(let i = 0; i < col * row; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
    
    setUpEventListeners();
    
}

function setUpEventListeners() {

    // grid-item listener
    document.querySelectorAll('.grid-item').forEach(e => {
        e.addEventListener('click' || 'mousedown', () => {
            e.style.backgroundColor = colorPicker.value;
        });
    });

    let mousedown = false;
    // mouse-down event
    document.querySelectorAll('.grid-item').forEach(e => {
        e.addEventListener('mousedown', () => {
            mousedown = true;
        });
    });

    document.querySelectorAll('.grid-item').forEach(e => {
        e.addEventListener('mouseup', () => {
            mousedown = false;
        });
    });

    document.querySelectorAll('.grid-item').forEach(e => {
        e.addEventListener('mousemove', () => {
            if(mousedown) {
                e.style.backgroundColor = colorPicker.value;
            }
        });
    });
}

setUpGrid(16, 16);