onload = () =>{
  document.getElementById("btn-mobile").onclick = () => toggleMenu();
  document.getElementById("submit").onclick = () => imc();
}

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

function imc(){
  const select = document.getElementById('sexo');
  const sexo = select.options[select.selectedIndex];
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');
  var idade = document.getElementById('idade');

  if (altura!=='' && peso!==''){ 
    valorIMC = (peso / (altura * altura)).toFixed(2);
  }else{
    resultado.innerHTML = '<p>Preencha os campos!</p>';
  }

  var msg, nivel = '';
  if(sexo.value == 'masculino'){
    nivel = imcMasculino(idade);
    msg = `<p>O seu IMC é ${valorIMC} e o estado nutricional está classificado como ${nivel}.</p>`;
  }else{
    nivel = imcFeminino(idade);
    msg = `<p>O seu IMC é ${valorIMC} e o estado nutricional está classificado como ${nivel}.</p>`;
  }

  resultado.innerHTML = msg;

}