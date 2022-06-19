const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
	if (event.type === 'touchstart') event.preventDefault();
	const nav = document.querySelector('nav');
	nav.classList.toggle('active');
	const active = nav.classList.contains('active');
	event.currentTarget.setAttribute('aria-expanded', active);
	if (active) {
		event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
	} else {
		event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
	}
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadeWindow = window.innerHeight * 5;

function animarScroll() {
	const topoItem = scrollAnima.getBoundingClientRect().top;
	const itemVisivel = topoItem - metadeWindow < 2.5;
	const itemInvisivel = topoItem - 300 < 700;

	if (itemVisivel) {
		scrollAnima.classList.add('show-button');
	} else {
		scrollAnima.classList.remove('show-button');
	}
	if (itemInvisivel == true) {
		scrollAnima.classList.remove('show-button');
	}
}
window.addEventListener('scroll', animarScroll);

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function scrollToPosition(to) {
	window.scroll({
		top: to,
		behavior: "smooth",
	});
	// smoothScrollTo(0, to); // endX, endY, duration (ms)
}

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.target) /* - 80 (px) */ ;
	scrollToPosition(to);
}
menuItems.forEach(item => {
	item.addEventListener('click', scrollIdOnClick);
})


const smoothScrollFixed = document.querySelector('#scrollFixed a[href^="#"]');

function getScrollByHrefFixed(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id);
}

function scrollFiexed(event) {
	event.preventDefault();
	const to = getScrollByHrefFixed(event.target);
	scrollToPosition(to);
}
smoothScrollFixed.addEventListener('click', scrollFiexed);

let imcRules = {
	14: [3.5, 7.5, 10.5, 15.5, 19.5, 24.5, 29.5, 34.5, 39.99], // 24.5
	24: [4.5, 8.5, 11.5, 16.5, 20.5, 25.5, 30.5, 35.5, 40.99], // 25.5
	34: [5.5, 9.5, 12.5, 17.5, 21.5, 26.5, 31.5, 36.5, 41.99], // 26.5
	44: [6.5, 10.5, 13.5, 18.5, 22.5, 27.5, 32.5, 37.5, 42.99], // 27.5
	54: [7.5, 11.5, 14.5, 19.5, 23.5, 28.5, 33.5, 38.5, 43.99], // 28.5
	64: [8.5, 12.5, 15.5, 20.5, 24.5, 29.5, 34.5, 39.5, 44.99], // 29.5
	65: [9.5, 13.5, 16.5, 21.5, 25.5, 30.5, 35.5, 40.5, 45.99], // 30.5
}

let imcText = ["desnutrição grau V", "desnutrição grau IV", "desnutrição grau III", "desnutrição grau II", "desnutrição grau I", "normal", "pré-obesidade", "obesidade grau I", "obesidade grau II", "obesidade grau III"];

function imcGenero(idade, imc, sexo) {
	let keys = Object.keys(imcRules);
	for (let k = 0; k < keys.length; k++) {

		if (idade < 65) {

			if (idade > keys[k]) {
				continue;
			}
			let keyValue = imcRules[keys[k]];
			for (let t = 0; t < keyValue.length; t++) {
				let value = sexo == 'masculino' ? keyValue[t] : keyValue[t] - 0.5;
				if (imc < keyValue[8]) {
					if (imc < value) {
						return imcText[t];
					}
				} else {
					return imcText[9];
				}
			}

		} else { // idade >= 65

			let keyValue = imcRules[keys[6]];
			for (let t = 0; t < keyValue.length; t++) {
				let value = sexo == 'masculino' ? keyValue[t] : keyValue[t] - 0.5;
				if (imc < keyValue[8]) {
					if (imc < value) {
						return imcText[t];
					}
				} else {
					return imcText[9];
				}
			}

		}

	}
	return imcText[imcText.length - 1];
}

function imcCalculo(altura, peso) {
	var resultadoIMC = (peso / (altura * altura)).toFixed(2);
	if(resultadoIMC == 0.00){
		resultadoIMC = NaN;
	}
	return resultadoIMC;
}

const submitCalculo = document.getElementById("submit");

function startCalculo() {
	const select = document.getElementById('sexo');
	const sexo = select.options[select.selectedIndex].value;
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const idade = document.getElementById('idade').value;
	const resultado = document.getElementById('resultado');

	if ((altura && peso && idade != '') && (sexo != 'selecione')) {
		var imc = imcCalculo(altura, peso, idade);
		var nivel = '';
		nivel = imcGenero(idade, imc, sexo);

		if(isFinite(imc)){
			resultado.innerHTML = `<p>O seu IMC é ${imc} e o estado nutricional está classificado como ${nivel}.</p>`;
		}else{
			resultado.innerHTML = `<p>Informações inválidas!</p>`;
		}

	} else {
		resultado.innerHTML = `<p>Preencha todos os campos!</p>`;
	}

}
submitCalculo.addEventListener('click', startCalculo);

const typeNumberNegativo = document.querySelectorAll('[type="number"]');
typeNumberNegativo.forEach(item => {
	item.addEventListener('keypress', function(e){
		const keyCode = (e.keyCode ? e.keyCode : e.wich);
		if(keyCode == 45){
			e.preventDefault();
		}
	});
})
$("#altura").mask("9.99", { reverse: true })

const titulo = document.querySelectorAll(".header-h3");
titulo.forEach(forEachTitulo => {
	forEachTitulo.addEventListener("click", event => {
		const icone = document.querySelector(".header-h3.active");
		if (icone && icone !== forEachTitulo) {
			icone.classList.toggle("active");
			icone.nextElementSibling.style.maxHeight = 0;
		}
		forEachTitulo.classList.toggle("active");
		const container = forEachTitulo.nextElementSibling;
		if (forEachTitulo.classList.contains("active")) {
			container.style.maxHeight = container.scrollHeight + "px";
		} else {
			container.style.maxHeight = 0;
		}
	});
});



// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo 
// https://github.com/origamid/publico/tree/main/scroll-suave-para-link-interno-javascript-puro
/*
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== 'undefined' ? duration : 400;

	// Easing function
	const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
		return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
	};

	const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
			clearInterval(timer);
		}
		window.scroll(newX, newY);
	}, 1000 / 60); // 60 fps
};
