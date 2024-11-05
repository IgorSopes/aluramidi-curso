function tocaSom (_idElementAudio) {
    document.querySelector(_idElementAudio).play();
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador + 1
    console.log(contador)
}