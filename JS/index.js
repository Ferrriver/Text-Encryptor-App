document.querySelector("#card-result").style.display = "none";

var texto;
var resultado;
var tarjetaResultado;
var tarjetaVacia;
var encryptButton = document.querySelector("#encrypt-btn");
var decryptButton = document.querySelector("#decrypt-btn");


function  encriptar() {
   
texto = document.querySelector("#textArea").value;
resultado = document.querySelector("#resultado");
tarjetaResultado = document.querySelector("#card-result");
tarjetaVacia = document.querySelector("#card-no-result");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
                            
    if (texto.length != 0) {
        resultado.value = textoCifrado;
        tarjetaVacia.style.display = "none";
        tarjetaResultado.style.display = "flex"; 
        $(encryptButton).popover('hide');
    } else {
        $(encryptButton).popover('show');
    }
}

function desencriptar() {
    texto = document.querySelector("#textArea").value;
    resultado = document.querySelector("#resultado");
    tarjetaResultado = document.querySelector("#card-result");
    tarjetaVacia = document.querySelector("#card-no-result");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        resultado.value = textoCifrado;
        tarjetaVacia.style.display = "none";
        tarjetaResultado.style.display = "flex";
        $(decryptButton).popover('hide');
    } else {
        $(decryptButton).popover('show');
    }
}

function copiarTexto() {
    resultado.select();
    document.execCommand("copy");
}
