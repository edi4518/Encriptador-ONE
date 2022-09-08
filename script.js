const inputTexto = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".areatextoencriptado");
const panelDcho = document.querySelector(".divpaneldcho");
const panelDchoRes = document.querySelector(".divpaneldchoresultado");

function encriptar(stringEncriptado){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();


    for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
    stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }     
        }   
    
    return stringEncriptado;
    }
   




function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

   
    for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
    stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }     
    }
    return stringDesencriptado;
   
}

function btnEncriptar(){
    
    if(inputTexto.value !=""){
        const mensajeEncriptado = encriptar(inputTexto.value);
        mensaje.value = mensajeEncriptado;
        panelDcho.style.display = "none";
        panelDchoRes.style.display = "block";
        inputTexto.value = "";
    }
    else{
        alert("Por favor ingrese texto a encriptar")
    }
}

function btnDesencriptar(){
    if(inputTexto.value !=""){
    const mensajeEncriptado = desencriptar(inputTexto.value);
    mensaje.value = mensajeEncriptado;
    panelDcho.style.display = "none";
    panelDchoRes.style.display = "block";
    inputTexto.value = "";
    }
}


function copiarTexto(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado", 'success');

}


