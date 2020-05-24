// Select color input
// Select size input
let table = document.getElementById('pixelCanvas');
let formTable = document.getElementById('sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas')

// When size is submitted by the user, call makeGrid()
formTable.addEventListener('submit', createTable);

function makeGrid(height, width) {
  if (pixelCanvas.childNodes.length > 0) {
    pixelCanvas.innerHTML = ''
  }
  for (let i = 1; i <= height; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 1; j <= width; j++) {
      let td = document.createElement('td');
      td.className = 'cell'
      tr.appendChild(td);
    }
  }
}

function createTable(event) {
  event.preventDefault();
  let height = document.getElementById('inputHeight');
  let width = document.getElementById('inputWidth');
  makeGrid(parseInt(height.value), parseInt(width.value));
}

pixelCanvas.addEventListener('click', (event) => {
    let color = document.querySelector('#colorPicker').value
    const cell = event.target
    if (cell.className === 'cell') {
        cell.style.backgroundColor = color
    }
})
