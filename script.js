// Add a set of radio buttons to select
// Black, rainbow or shades of grey filling options

function makeNewCanvas(canvSize) {
    let containter = document.getElementById('sketchPad');
    while (containter.firstChild) {
        containter.removeChild(containter.lastChild);
    };
    console.log(canvSize);
    for (i = 0; i <= canvSize-1; i++) {
        for (j = 0; j <= canvSize-1; j++) {
            let pixel = document.createElement('div');
            pixel.setAttribute('id', `${i}${j}`);
            pixel.classList.toggle('cell');
            containter.appendChild(pixel);
        }
    }
    let pixels = document.querySelectorAll('.cell');
    pixels.forEach(pixel => {
        pixel.style.width = `${720/canvSize}px`;
        pixel.style.height = `${720/canvSize}px`;
    });
    let canvasSizeHeader = document.querySelector('#canvasSize');
    canvasSizeHeader.textContent = `Current canvas: ${canvSize}x${canvSize}`
}

makeNewCanvas(16);

let cellHovered = document.querySelector('#sketchPad');
cellHovered.addEventListener('mouseover', (e) => {
    if (e.target.id !== 'sketchPad') {
        e.target.style.backgroundColor = "black";
    }
});

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.cell');
    pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
    let sizeCheck = true;
    let canvasSize = 16;
    while (sizeCheck) {
        canvasSize = prompt("Enter new canvas size (16-100):");
        if (canvasSize >= 16 && canvasSize <= 100) {
            sizeCheck = false;
        }
    };
    makeNewCanvas(canvasSize);
})