function detectorDados (dado) {

    if (typeof dado === 'boolean') {

        console.log("Este dado é um Boleano.");

    } else if (typeof dado === 'number') {

        console.log("Este dado é um Number.");

    } else if (typeof dado === 'string'){

        console.log("Este dado é uma String.")
    }    
}

detectorDados(true);
detectorDados(5);
detectorDados("ola");