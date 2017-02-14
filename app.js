var isPrime = function(number) {
    // Número 1 não é primo
    if (number == 1) return false;

    // Assumindo que o número recebido é primo até
    //  que se encontre divisores inteiros
    var isPrime = true;

    // Verificando divisores inteiros. Ao encontrar
    //  o primeiro, sair do loop, pois não é primo
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

module.exports = isPrime;
