const grid = document.querySelector('#grid');

let numRows = 8

const clearButton = document.querySelector('#clearButton')

function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover',changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}


setupGrid(numRows);


clearButton.addEventListener('click', () => {
    numRows = prompt('How many rows doyawant, fool?')
    grid.innerHTML = null;
    setupGrid(numRows);
})