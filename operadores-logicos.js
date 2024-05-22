const notaFinal = 7
const faltas = 1
const advertencia = 0

if(notaFinal < 7 || faltas > 4) {
    console.log ('reprovado, boas festas');
} else {
    console.log ('não foi reprovado')
}

if (faltas <= 2 && !advertencia) {
    console.log ('recebeu bônus');
} else {
    console.log ('não recebeu bônus');
}
