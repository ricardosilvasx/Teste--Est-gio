function numeroFibonaci(num) {
    var a = 0;
    var b = 1;
    var temp;

 
    if (num === 0 || num === 1) {
        return "O número " + num + " pertence à sequência de Fibonacci.";
    }

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (b === num) {
        return "O número " + num + " pertence à sequência de Fibonacci.";
    } else {
        return "O número " + num + " não pertence à sequência de Fibonacci.";
    }
}

// Teste
var Teste = 8;
console.log(numeroFibonaci(Teste));
