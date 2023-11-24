let img = document.querySelector('#img');
let i = 0;
let images = [];
time = 3000;

images[0] = './images/nature_1.jpg';
images[1] = './images/nature_2.jpg';
images[2] = './images/nature_3.jpg';
images[3] = './images/nature_4.jpg';

function slider() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('slider()', time);
}

window.onload = slider;