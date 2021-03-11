function numeroNeg (num) {

    if (num < 0) {

       console.log("Seu número transformado para positivo é: " + Math.abs(num) + "."); 

    } else if (num > 0) {

        console.log("Escreva um número negativo.");

    } else if (num == 0) {

        console.log("Valor inválido!");

    }

}

numeroNeg(5);
numeroNeg(0);
numeroNeg(-4);
numeroNeg(-35.5);