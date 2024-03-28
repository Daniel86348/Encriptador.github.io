const campo_texto = document.querySelector('.texto');
const campo_mensaje = document.querySelector('.textoEncriptado');

const matriz=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptar(){
    const texto = encriptado(campo_texto.value);
    console.log(texto);
};

function encriptado(fraseEncriptada){
    for(let i = 0; i < matriz.length; i++){
        if(fraseEncriptada.includes(matriz[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz[i][0],
                matriz[i][1]
            )
        }
    }
    return fraseEncriptada
};