function makeNewCanvas(canvSize) {
    let containter = document.getElementById('sketchPad');
    console.log("On func call:", canvSize);
    while (containter.firstChild) {
        containter.removeChild(containter.lastChild);
    };
    for (i = 0; i <= canvSize-1; i++) {
        for (j = 0; j <= canvSize-1; j++) {
            let pixel = document.createElement('div');
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

function fillRainbow(e) {
    if (e.target.id !== 'sketchPad' && e.target.classList.length < 2) {
        let redColor = Math.floor(Math.random()*255)
        let greenColor = Math.floor(Math.random()*255)
        let blueColor = Math.floor(Math.random()*255)
        e.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
        e.target.classList.toggle('filled');
    }
};

function fillBlack(e) {
    if (e.target.id !== 'sketchPad' && e.target.classList.length < 2) {
        e.target.style.backgroundColor = 'black';
        e.target.classList.toggle('filled');
    }
};

function fillShadesOfGray(e) {
    if (e.target.id !== 'sketchPad' && e.target.id < 100) {
        let shadeValue = 90 - e.target.id;
        e.target.style.backgroundColor = `hsl(0, 0%, ${shadeValue}%)`;
        e.target.id = `${100 - shadeValue}`;
    }
};

makeNewCanvas(16);

let cellHovered = document.querySelector('#sketchPad');
cellHovered.addEventListener('mouseover', (e) => fillShadesOfGray(e));

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let sizeCheck = true;
    let canvasSize = 16;
    while (sizeCheck) {
        canvasSize = prompt("Enter new canvas size (16-100):");
        if (canvasSize >= 16 && canvasSize <= 100) {
            sizeCheck = false;
        }
    };
    console.log("On click:", canvasSize);
    makeNewCanvas(canvasSize);
})