let containter = document.getElementById('sketchPad');
for (i = 0; i <= 32; i++) {
    for (j = 0; j <=32; j++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('id', `${i}${j}`);
        pixel.classList.toggle('cell');
        containter.appendChild(pixel);
    }
}

let cellHovered = document.querySelectorAll('.cell');
cellHovered.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('filled');
        console.log(cell);
    });
});