function imprimePar (num) {

    while (num > 0) {

        if (num % 2 == 0){

            console.log(`O valor atual é  ${num}.`);

        }

        num--;

    }

}

imprimePar(10);
imprimePar(11);
imprimePar(20);