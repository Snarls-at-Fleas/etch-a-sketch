let containter = document.getElementById('sketchPad');
for (i = 0; i <= 16; i++) {
    for (j = 0; j <=16; j++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('id', `${i}${j}`);
        pixel.classList.toggle('cell');
        containter.appendChild(pixel);
    }
}

let cellHovered = document.querySelector('#sketchPad');
cellHovered.addEventListener('mouseover', (e) => {
    console.log(e.target);
})