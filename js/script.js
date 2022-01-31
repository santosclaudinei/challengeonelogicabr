var botaoEncriptar = document.querySelector('#btn-cripto');
botaoEncriptar.addEventListener('click', function(event) {

  event.preventDefault();
  buscaTextoDigitado('#input-texto');
  mostraResultado(textoLimpo, encriptarTexto);

});

var botaoDesencriptar = document.querySelector('#btn-descripto');
botaoDesencriptar.addEventListener('click', function(event) {

  event.preventDefault();
  buscaTextoDigitado('#input-texto');
  mostraResultado(textoLimpo, desencriptarTexto);

});

var botaoCopiar = document.querySelector('#btn-copy');
botaoCopiar.addEventListener('click', function(event) {

    textoCopiado = document.getElementById('msg');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 999999);

    document.execCommand('copy');
    alert('O texto foi copiado');


})

function buscaTextoDigitado(idDoBotao) {

    var textoNormal = document.querySelector(idDoBotao).value;
    textoLimpo = (transformaTexto(textoNormal));

}

function transformaTexto(texto) {

    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function mostraResultado(frase, funcao) {

    var resultado = document.querySelector('#msg');
    resultado.value = funcao(frase);

}

function encriptarTexto(textoLimpo) {

    let novoTexto = textoLimpo.replace(/e/gi, "enter")
    .replace(/i/gi, "imes").replace(/a/gi, "ai")
    .replace(/o/gi, "ober").replace(/u/gi, "ufat").toLowerCase();

    return novoTexto;

}

function desencriptarTexto(textoCriptografado) {

    let novoTexto = textoCriptografado.replace(/enter/gi, "e")
    .replace(/imes/gi, "i").replace(/ai/gi, "a")
    .replace(/ober/gi, "o").replace(/ufat/gi, "u").toLowerCase();

    return novoTexto;

}
