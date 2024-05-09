let bodyContainer = document.querySelector('.body-contianer');
let box = document.querySelector('.box');
let boxLayer = document.createElement('div');
boxLayer.classList.add('box-layer');
boxLayer.style.visibility = 'hidden';
let instagram = document.querySelector('.instagram');

box.appendChild(boxLayer);
boxLayer.appendChild(instagram);

box.addEventListener('mouseenter', () => {
    boxLayer.style.visibility = 'visible';
});

box.addEventListener('mouseleave', () => {
    boxLayer.style.visibility = 'hidden';
});

const click = () => {
    box.addEventListener('click', () => {
        boxLayer.style.visibility = 'visible';
    });
};

bodyContainer.addEventListener('click', () => {
    boxLayer.style.visibility = 'hidden';
})

click();