onload = () =>{
  document.getElementById("btn-mobile").onclick = () => toggleMenu();
  document.getElementById("submit").onclick = () => start();
}
function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

let imcRules = {
  14: [3.5, 7.5, 10.5, 15.5, 19.5, 24.5, 29.5, 34.5, 39.99], // 24.5
  24: [4.5, 8.5, 11.5, 16.5, 20.5, 25.5, 30.5, 35.5, 40.99], // 25.5
  34: [5.5, 9.5, 12.5, 17.5, 21.5, 26.5, 31.5, 36.5, 41.99], // 26.5
  44: [6.5, 10.5, 13.5, 18.5, 22.5, 27.5, 32.5, 37.5, 42.99], // 27.5
  54: [7.5, 11.5, 14.5, 19.5, 23.5, 28.5, 33.5, 38.5, 43.99], // 28.5
  64: [8.5, 12.5, 15.5, 20.5, 24.5, 29.5, 34.5, 39.5, 44.99], // 29.5
  65: [9.5, 13.5, 16.5, 21.5, 25.5, 30.5, 35.5, 40.5, 45.99], // 30.5
} 

let imcText = ["desnutrição grau V","desnutrição grau IV","desnutrição grau III","desnutrição grau II", "desnutrição grau I", "normal", "pré-obesidade", "obesidade grau I", "obesidade grau II", "obesidade grau III"];

function imcGenero(idade, imc, sexo) {  
  let keys = Object.keys(imcRules);
  for (let k = 0; k < keys.length; k++) { 

    if (idade < 65){
      if (idade > keys[k]) { continue; }  
      let keyValue = imcRules[keys[k]];
      for (let t = 0; t < keyValue.length; t++ ) {
        let value = sexo == 'masculino' ? keyValue[t] : keyValue[t]-0.5;
        if (imc < keyValue[8]){
          if (imc < value) { return imcText[t];}
        }else{
          return imcText[9];
        }  
      }
    }else{ // idade >= 65
      let keyValue = imcRules[keys[6]];
      for (let t = 0; t < keyValue.length; t++ ){
        let value = sexo == 'masculino' ? keyValue[t] : keyValue[t]-0.5;
        if (imc < keyValue[8]){
          if (imc < value) { return imcText[t];}
        }else{
          return imcText[9];
        } 
      }

    }  

  }
  return imcText[imcText.length-1];
}

function imcCalculo(altura, peso){
    var resultadoIMC = (peso / (altura * altura)).toFixed(2);
    return resultadoIMC;
}

function start(){
  const select = document.getElementById('sexo');
  const sexo = select.options[select.selectedIndex].value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const idade = document.getElementById('idade').value;
  const resultado = document.getElementById('resultado');
  var imc = imcCalculo(altura, peso, idade);
  var nivel = '';
  nivel = imcGenero(idade, imc, sexo); 
  resultado.innerHTML = `<p>O seu IMC é ${imc} e o estado nutricional está classificado como ${nivel}.</p>`;
}