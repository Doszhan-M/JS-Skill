// Выведите на экран надпись "Ширина экрана {width} пикселей" и обновляйте ее при изменении ширины.

const button = document.querySelector('button');

const updateWidthLabel = () => {
	const currentWidth = window.innerWidth;
	button.innerHTML = `Ширина экрана ${currentWidth} пикселей`
}

updateWidthLabel();
window.addEventListener('resize', updateWidthLabel);