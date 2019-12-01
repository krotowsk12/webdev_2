window.onload=function f() {
    let clickCounter = 0;
    let dblClickCounter = 0;
    let keyClickCounter = 0;

    document.addEventListener('click', function () {
            document.getElementById('click-counter').textContent = ++clickCounter;

        });

    document.addEventListener('dblclick', function () {
        document.getElementById('dbl-click-counter').textContent = ++dblClickCounter;


    });

    document.addEventListener('dblclick', function () {
        document.getElementById('key-click-counter').textContent = ++keyClickCounter;


    });
    let button = document.getElementById('add-element');
    let boxContainer = document.getElementById('box-container');

    button.addEventListener('click', function(){
        let nowyElement = document.createElement('div');
        nowyElement.classList.add('box');
        boxContainer.appendChild('NowyElement');
    };

    /*usuwanie pudełek po kliknięciu*/
    boxContainer.addEventListener('click', function (e) {
        if (e.target.className.includes('box')) {
            this.removeChild(e.target);
        }
    })



};