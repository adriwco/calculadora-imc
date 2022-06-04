
function imcMasculino(idade){
  var classificacao = '';
  if (idade.value < 14){
    if(valorIMC < 2){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 6){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 10){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 14){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 18){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 23){
      classificacao = 'normal';
    }else if(valorIMC < 28){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 33){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 38){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 43){
      classificacao = 'obesidade grau III';
    }
  }else if(idade.value < 24){
    if(valorIMC < 3){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 7){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 11){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 15){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 19){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 24){
      classificacao = 'normal';
    }else if(valorIMC < 29){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 34){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 39){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 44){
      classificacao = 'obesidade grau III';
    }
  
  }else if(idade.value < 34){
    if(valorIMC < 4){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 8){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 12){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 16){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 20){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 25){
      classificacao = 'normal';
    }else if(valorIMC < 30){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 35){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 40){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 45){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value < 44){
    if(valorIMC < 5){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 9){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 13){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 17){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 21){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 26){
      classificacao = 'normal';
    }else if(valorIMC < 31){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 36){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 41){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 46){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value < 54){
    if(valorIMC < 6){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 10){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 14){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 18){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 22){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 27){
      classificacao = 'normal';
    }else if(valorIMC < 32){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 37){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 42){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 47){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value < 64){
    if(valorIMC < 7){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 11){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 15){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 19){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 23){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 28){
      classificacao = 'normal';
    }else if(valorIMC < 33){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 38){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 43){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 48){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value > 65){
    if(valorIMC < 8){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 12){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 16){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 20){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 24){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 29){
      classificacao = 'normal';
    }else if(valorIMC < 34){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 39){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 44){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 49){
      classificacao = 'obesidade grau III';
    }
  }
  return classificacao;
}

/*======================================================*/

function imcFeminino(idade){
  var classificacao = '';
  if (idade.value < 14){
    if(valorIMC < 1){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 5){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 9){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 13){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 17){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 22){
      classificacao = 'normal';
    }else if(valorIMC < 27){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 32){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 37){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 42){
      classificacao = 'obesidade grau III';
    } 
  }else if(idade.value < 24){
    if(valorIMC < 2){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 6){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 10){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 14){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 18){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 23){
      classificacao = 'normal';
    }else if(valorIMC < 28){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 33){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 38){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 43){
      classificacao = 'obesidade grau III';
    }
  
  }else if(idade.value < 34){
    if(valorIMC < 3){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 7){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 11){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 15){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 19){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 24){
      classificacao = 'normal';
    }else if(valorIMC < 29){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 34){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 39){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 44){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value < 44){
    if(valorIMC < 4){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 8){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 12){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 16){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 20){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 25){
      classificacao = 'normal';
    }else if(valorIMC < 30){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 35){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 40){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 45){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value < 54){
    if(valorIMC < 5){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 9){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 13){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 17){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 21){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 26){
      classificacao = 'normal';
    }else if(valorIMC < 31){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 36){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 41){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 46){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value < 64){
    if(valorIMC < 6){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 10){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 14){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 18){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 22){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 27){
      classificacao = 'normal';
    }else if(valorIMC < 32){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 37){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 42){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 47){
      classificacao = 'obesidade grau III';
    }
    
  }else if(idade.value > 65){
    if(valorIMC < 7){
      classificacao = 'desnutrição grau V';
    }else if(valorIMC < 11){
      classificacao = 'desnutrição grau IV';
    }else if(valorIMC < 15){
      classificacao = 'desnutrição grau III';
    }else if(valorIMC < 19){
      classificacao = 'desnutrição grau II';
    }else if(valorIMC < 23){
      classificacao = 'desnutrição grau I';
    }else if(valorIMC < 28){
      classificacao = 'normal';
    }else if(valorIMC < 33){
      classificacao = 'pré-obesidade';
    }else if(valorIMC < 38){
      classificacao = 'obesidade grau I';
    }else if(valorIMC < 43){
      classificacao = 'obesidade grau II';
    }else if(valorIMC > 48){
      classificacao = 'obesidade grau III';
    }
  }
  return classificacao;
}
