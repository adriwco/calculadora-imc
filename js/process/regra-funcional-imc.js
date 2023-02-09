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
	let keyValue = imcRules[Object.keys(imcRules)[idade > 64 ? 6 : 0]];

	for (let t = 0; t < keyValue.length; t++) {
		let value = sexo == 'masculino' ? keyValue[t] : keyValue[t] - 0.5;
		if (imc <= keyValue[8]) {
			if (imc < value) {
				return imcText[t];
			}
		} else {
			break;
		}
	}

	return imcText[9];
}

/*
function imcGenero(idade, imc, sexo) {
	let keys = Object.keys(imcRules);
	for (let k = 0; k < keys.length; k++) {

		if (idade <= 64) {

			if (idade > keys[k]) {
				continue;
			}
			let keyValue = imcRules[keys[k]];
			for (let t = 0; t < keyValue.length; t++) {
				let value = sexo == 'masculino' ? keyValue[t] : keyValue[t] - 0.5;
				if (imc <= keyValue[8]) {
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
				if (imc <= keyValue[8]) {
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
*/

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


$(document).ready(function(){
  $('input').bind('cut copy paste',function(e) {
      e.preventDefault();
  });
});
$("#idade").mask("999", { 
	onKeyPress: function(val) {
		if ((val > 150) || (val.charAt(0) == 0)) {
			$('#idade').val('');
		}
	}
});
$("#altura").mask("9.99", { 
	onKeyPress: function(val) {
			const segundaCasaDecimal = val.charAt(3) >= 1 && val.charAt(3) <= 9 && (val.charAt(0) == 0) && (val.charAt(2) == 0);
			for(let numChar = 1; numChar <= 4; numChar++ ){
				if((val.charAt(2) == numChar) && (val.charAt(0) == 0) || (segundaCasaDecimal)){
					$('#altura').val('');
				}
			}
			if (val.replace(',', '.') > 3.99) {
				$('#altura').val('');
			}
		}
});
$("#peso").mask("999.99", { 
	onKeyPress: function(val) {
			if ((val.replace(',', '.') > 450.00) || (val.charAt(0) == 0)) {
				$('#peso').val('');
			}
		}
});

// console.log('𐩕'.codePointAt(0));   
var inputNumber = document.querySelectorAll('[type="number"]');
inputNumber.forEach(numberforEach => {
	numberforEach.addEventListener('keypress', event =>{
		var theEvent = event || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		if(numberforEach.id == 'peso'){
			var regex = /^[0-9.,]+$/;
		}else{
			var regex = /^[0-9]+$/;
		}
		if(!regex.test(key)) {
			 if(theEvent.preventDefault) theEvent.preventDefault();
		}
	});	
});

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
		//console.log(forEachTitulo.classList.contains("active") == false)
		if (forEachTitulo.classList.contains("active")) {
			container.style.maxHeight = container.scrollHeight + "px";
		} else {
			container.style.maxHeight = 0;
		}
	});
});

/*  Replace all SVG images with inline SVG */
$('img.svg').each(function(){
	var $img = $(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
	
	$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		});
	});
