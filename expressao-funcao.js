console.log(estudanteReprovou(6, 5))
console.log(estudanteReprovou(9, 9))


const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas >4) {
        return true;
    } else {
        return false;
    }
} 