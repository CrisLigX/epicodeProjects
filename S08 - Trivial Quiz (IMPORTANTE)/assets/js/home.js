function rifaiQuizA() {

    var R1 = localStorage.getItem('rispostaDataA01' + UtenteSalvato);
    var R2 = localStorage.getItem('valoreA01' + UtenteSalvato);

    if (R1 != null && R2 != null) {
        localStorage.removeItem('rispostaDataA01' + UtenteSalvato);
        localStorage.removeItem('valoreA01' + UtenteSalvato);
        localStorage.removeItem('rispostaDataA02' + UtenteSalvato);
        localStorage.removeItem('valoreA02' + UtenteSalvato);
        localStorage.removeItem('rispostaDataA03' + UtenteSalvato);
        localStorage.removeItem('valoreA03' + UtenteSalvato);
        localStorage.removeItem('rispostaDataA04' + UtenteSalvato);
        localStorage.removeItem('valoreA04' + UtenteSalvato);
        localStorage.removeItem('rispostaDataA05' + UtenteSalvato);
        localStorage.removeItem('valoreA05' + UtenteSalvato);
        alert('Risultato eliminato!')
    }

    else {
        alert('Non hai ancora fatto questo quiz!')
    }

}

function rifaiQuizB() {

    var R1 = localStorage.getItem('rispostaDataB01' + UtenteSalvato);
    var R2 = localStorage.getItem('valoreB01' + UtenteSalvato);

    if (R1 != null && R2 != null) {
        localStorage.removeItem('rispostaDataB01' + UtenteSalvato);
        localStorage.removeItem('valoreB01' + UtenteSalvato);
        localStorage.removeItem('rispostaDataB02' + UtenteSalvato);
        localStorage.removeItem('valoreB02' + UtenteSalvato);
        localStorage.removeItem('rispostaDataB03' + UtenteSalvato);
        localStorage.removeItem('valoreB03' + UtenteSalvato);
        localStorage.removeItem('rispostaDataB04' + UtenteSalvato);
        localStorage.removeItem('valoreB04' + UtenteSalvato);
        localStorage.removeItem('rispostaDataB05' + UtenteSalvato);
        localStorage.removeItem('valoreB05' + UtenteSalvato);
        alert('Risultato eliminato!')
    }

    else {
        alert('Non hai ancora fatto questo quiz!')
    }

}

function rifaiQuizC() {

    var R1 = localStorage.getItem('rispostaDataC01' + UtenteSalvato);
    var R2 = localStorage.getItem('valoreC01' + UtenteSalvato);

    if (R1 != null && R2 != null) {
        localStorage.removeItem('rispostaDataC01' + UtenteSalvato);
        localStorage.removeItem('valoreC01' + UtenteSalvato);
        localStorage.removeItem('rispostaDataC02' + UtenteSalvato);
        localStorage.removeItem('valoreC02' + UtenteSalvato);
        localStorage.removeItem('rispostaDataC03' + UtenteSalvato);
        localStorage.removeItem('valoreC03' + UtenteSalvato);
        localStorage.removeItem('rispostaDataC04' + UtenteSalvato);
        localStorage.removeItem('valoreC04' + UtenteSalvato);
        localStorage.removeItem('rispostaDataC05' + UtenteSalvato);
        localStorage.removeItem('valoreC05' + UtenteSalvato);
        alert('Risultato eliminato!')
    }

    else {
        alert('Non hai ancora fatto questo quiz!')
    }

}

