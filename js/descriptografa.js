function descriptografar(textoCapturado){
    let textoDescripto = "";

    textoDescripto = textoCapturado.replace(/ai/g, "a");
    textoDescripto = textoDescripto.replace(/enter/g, "e")
    textoDescripto = textoDescripto.replace(/imes/g, "i")
    textoDescripto = textoDescripto.replace(/ober/g, "o")
    textoDescripto = textoDescripto.replace(/ufat/g, "u")

    return saida.value = textoDescripto;

};