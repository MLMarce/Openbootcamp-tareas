//Usando if

if(numeroIf < 0) {
    document.write("es negativo");
} else if(numeroIf > 0) {
    document.write("es positivo");
} else {
    document.write("es neutro");
}


//Usando while
let numeroWhile = 0;

while(numeroWhile < 3) {
    numeroWhile = numeroWhile + 1;
    document.write(numeroWhile);
}


// Usando Do While

numeroWhile = 3;

do {
     document.write(numeroWhile);
} while(numeroWhile < 3) {
    numeroWhile = numeroWhile + 1;
}

// Usando For

for(let numeroFor = 0; numeroFor <= 3; numeroFor = numeroFor + 1) {
    document.write(numeroFor);
}

// con switch

let estacion = "verano";

switch(estacion) {
    case "verano":
        console.log("es verano");
        break;
    case "invierno":
        console.log("es invierno");
        break;
    case "otoño":
        console.log("es otoño");
        break;
    case "primavera":
         console.log("es primavera");
         break;
    default:
        console.log("no es una estacion");
}
