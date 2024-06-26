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
    tieneMayuscula = mayuscula()
    if(tieneMayuscula == 0){
        window.alert('Error tiene mayuscula');
    } else if(tieneMayuscula == 1){
        const texto = encriptado(campo_texto.value);
        campo_mensaje.value = texto;
    }
};

function desencriptar(){
    tieneMayuscula = mayuscula()
    if(tieneMayuscula == 0){
        window.alert('Error tiene mayuscula');
    } else if(tieneMayuscula == 1){
        const txt = desencriptado(campo_texto.value);
        campo_mensaje.value = txt;
    }
}

function encriptado(fraseEncriptada){
    for(let i = 0; i < matriz.length; i++){
        if(fraseEncriptada.includes(matriz[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz[i][0],
                matriz[i][1]
            )
        }
    }
    return fraseEncriptada;
};

function desencriptado(fraseEncriptada){
    for(let i = 0; i < matriz.length; i++){
        if(fraseEncriptada.includes(matriz[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz[i][1],
                matriz[i][0]
            )
        }
    }
    return fraseEncriptada;
};

function mayuscula(){
    mayus= /([A-Z])\w+/;
    var texto = campo_texto.value
    if(!mayus.test(texto)){
        return 1;
    }else if(mayus.test(texto)){
        return 0;
    } 
}