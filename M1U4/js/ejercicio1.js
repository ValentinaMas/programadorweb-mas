distancia = parseInt(prompt('Ingrese la distancia que debe recorrer en metros:', ''));

        if (distancia <= 1000) { 
            document.write('Es conveniente ir a PIE');
        } else if (distancia >= 1001 && distancia <= 10000) {
            document.write('Es conveniente ir en BICICLETA');
        } else if (distancia >= 10001 && distancia <= 30000) {
            document.write('Es conveniente ir en COLECTIVO');
        } else if (distancia >= 30001 && distancia <= 100000) {
            document.write('Es conveniente ir en AUTO');
        } else if (distancia >100000) {
            document.write('Es conveniente ir en AVIÓN');
        }