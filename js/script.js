let div = document.querySelector('.ostapchuk');
let bold = document.querySelector('.bold');
let italic = document.querySelector('.italic');
let red = document.querySelector('.red');
let font12px = document.querySelector('.font12px');
let font28px = document.querySelector('.font28px');
let font36px = document.querySelector('.font36px');
let font72px = document.querySelector('.font72px');


bold.addEventListener("click", () => {
	bold.classList.toggle('active');
	if (bold.classList.contains('active')) {
		bold.textContent = 'Normal'
		div.style.fontWeight = 'bold'
	} else {
		bold.textContent = 'Жирний'
		div.style.fontWeight = 'normal'
	}
})
italic.addEventListener("click", () => {
	italic.classList.toggle('active');
	if (italic.classList.contains('active')) {
		italic.textContent = 'Відмінити курсив'
		div.style.fontStyle = 'italic'
	} else {
		italic.textContent = 'Курсивий'
		div.style.fontStyle = 'normal'
	}
})
red.addEventListener("click", () => {
	red.classList.toggle('active');
	if (red.classList.contains('active')) {
		red.textContent = 'Чорний'
		div.style.color = 'red'
	} else {
		red.textContent = 'Червоний'
		div.style.color = 'black'
	}
})
font12px.addEventListener("click", () => {
	font12px.classList.toggle('active');
	if (font12px.classList.contains('active')) {
		font12px.textContent = 'Розмір шрифта 14px'
		div.style.fontSize = '12px'
	} else {
		font12px.textContent = 'Розмір шрифта 12px'
		div.style.fontSize = '14px'
	}
})
font28px.addEventListener("click", () => {
	font28px.classList.toggle('active');
	if (font28px.classList.contains('active')) {
		font28px.textContent = 'Розмір шрифта 14px'
		div.style.fontSize = '28px'
	} else {
		font28px.textContent = 'Розмір шрифта 28px'
		div.style.fontSize = '14px'
	}
})
font36px.addEventListener("click", () => {
	font36px.classList.toggle('active');
	if (font36px.classList.contains('active')) {
		font36px.textContent = 'Розмір шрифта 14px'
		div.style.fontSize = '36px'
	} else {
		font36px.textContent = 'Розмір шрифта 36px'
		div.style.fontSize = '14px'
	}
})
font72px.addEventListener("click", () => {
	font72px.classList.toggle('active');
	if (font72px.classList.contains('active')) {
		font72px.textContent = 'Розмір шрифта 14px'
		div.style.fontSize = '72px'
	} else {
		font72px.textContent = 'Розмір шрифта 72px'
		div.style.fontSize = '14px'
	}
})