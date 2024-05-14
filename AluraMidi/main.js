function tocaSom(idAudio) {
  const elemento = document.querySelector(idAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  }
  else {
    console.log('Elemento invalido.');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTeclas.length; index++) {
  const tecla = listaDeTeclas[index];
  const instrumento = tecla.classList[1];
  const idAdudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAdudio);
  }
  
  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
   tecla.classList.remove('ativa');
  }
}
