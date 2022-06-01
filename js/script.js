const submit = document.getElementById('submit');

function imc(){
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (altura!=='' && peso!==''){
    
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    if(valorIMC < 10){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 12.9){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 15.9){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 16.9){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 18.4){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 24.9){
      classificacao = 'normal';
    }else if(valorIMC < 29.9){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 34.5){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 39.9){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 40){
      classificacao = 'obesidade grau III';
    }

    resultado.innerHTML = `<p>O seu IMC é ${valorIMC} e o estado nutricional está classificado como ${classificacao}.</p>`
  }else{
    resultado.innerHTML = '<p>Preencha os campos!</p>'
  }
}

submit.addEventListener('click', imc) 

