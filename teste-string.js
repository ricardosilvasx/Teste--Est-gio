function contarLetraA(texto) {
   
    const textoMinusculo = texto.toLowerCase();
    
    
    const quantidadeA = (textoMinusculo.match(/a/g) || []).length;
    
    if (quantidadeA > 0) {
        console.log(`A letra A existe na string e ocorre ${quantidadeA} vezes.`);
    } else {
        console.log("A letra A não ocorre no testo.");
    }
}

const texto = "Exemplo";
contarLetraA(texto);
