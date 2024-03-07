var campo_texto = document.getElementsByClassName("texto");
var campo_mensaje = document.getElementsByClassName('textoEncriptado');

const matriz=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptar(){
    var texto = campo_texto.value;
    console.log(texto);
};