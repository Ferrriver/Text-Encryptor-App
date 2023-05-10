document.querySelector("#card-result").style.display = "none";

var text;
var result;
var cardResult;
var emptyCard;
var encryptButton = document.querySelector("#encrypt-btn");
var decryptButton = document.querySelector("#decrypt-btn");


function  encrypt() {
   
    text = document.querySelector("#textArea").value;
    result = document.querySelector("#result");
    cardResult = document.querySelector("#card-result");
    emptyCard = document.querySelector("#card-no-result");

    let textEncrypted = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
                            
    if (text.length != 0) {
        result.value = textEncrypted;
        emptyCard.style.display = "none";
        cardResult.style.display = "flex"; 
        $(encryptButton).popover('hide');
    } else {
        $(encryptButton).popover('show');
    }
}

function decrypt() {
    text = document.querySelector("#textArea").value;
    result = document.querySelector("#result");
    cardResult = document.querySelector("#card-result");
    emptyCard = document.querySelector("#card-no-result");

    let textEncrypted = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (text.length != 0) {
        result.value = textEncrypted;
        emptyCard.style.display = "none";
        cardResult.style.display = "flex";
        $(decryptButton).popover('hide');
    } else {
        $(decryptButton).popover('show');
    }
}

function copiarTexto() {
    result.select();
    document.execCommand("copy");
}
