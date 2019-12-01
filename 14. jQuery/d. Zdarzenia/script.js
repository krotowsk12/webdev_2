/*window.onload=function f() {*/
    let clickCounter = 0;
    let dblClickCounter = 0;
    let keyClickCounter = 0;

    $(document.on('click', function () {
        $('#click-counter').text(++clickCounter);
    });

   /* document.addEventListener('click', function () {
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
  /*  boxContainer.addEventListener('click', function (e) {
        if (e.target.className.includes('box')) {
            this.removeChild(e.target);
        }
    })*/

  let button = $('#add-element');
  let boxContainer = $(#box-cotainer);
  button.on('click', function () {
      let nowyElement = $('div class="box"></div>');
      boxContainer.append(nowyElement);
  });

  boxContainer.on('click', '.box', function () {
      $(this).remove();
  }).



