const sx = document.getElementById('sx')
const dx = document.getElementById('dx')

const resSx = document.getElementById('resSx')
const resDx = document.getElementById('resDx')

var countSx = 0;
var countDx = 0;

window.addEventListener("load", init);

countSx = (localStorage.getItem('nomeS')); //Assegna alla variabile countSx il valore del local storage corrispondente)
countDx = (localStorage.getItem('nomeD')); //Assegna alla variabile countDx il valore del local storage corrispondente)

function init() {

    if (localStorage.getItem('nomeS') == null) {
        resSx.innerHTML = 0;
    }

    else {
        resSx.innerHTML = (localStorage.getItem('nomeS'))
    }


    if (localStorage.getItem('nomeD') == null) {
        resDx.innerHTML = 0;
    }

    else {
        resDx.innerHTML = (localStorage.getItem('nomeD'))
    }
}

sx.addEventListener('click', function () {
    countSx++
    resSx.innerHTML = countSx
    locStorageS();
})

dx.addEventListener('click', function () {
    countDx++
    resDx.innerHTML = countDx
    locStorageD();

})

function locStorageS() {
    localStorage.setItem("nomeS", countSx);
}

function locStorageD() {
    localStorage.setItem("nomeD", countDx);

}

cx.addEventListener('click', function () {
    localStorage.clear();
    resSx.innerHTML = 0;
    resDx.innerHTML = 0;
    countSx = 0;
    countDx = 0;
})