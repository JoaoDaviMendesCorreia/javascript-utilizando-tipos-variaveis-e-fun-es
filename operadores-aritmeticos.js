const notaPrimeiroBi = 7.6;
const notaSegundoBi = 8.1;
const notaTerceiroBi = 9.1;
const notaQuartoBi = Number.parseInt('8');

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media *0.1;// bonus de nota
}

console.log (`a média é ${media.toFixed(2)}`)
