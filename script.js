let containter = document.getElementById('sketchPad');
for (i = 0; i <= 100; i++) {
    for (j = 0; j <=100; j++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('id', `${i}${j}`);
        pixel.classList.toggle('cell');
        containter.appendChild(pixel);
    }
}

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
})