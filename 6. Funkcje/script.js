function pierwszaFunkcja() {
    console.log('Jakaś wartość')
}
/*pierwszaFunkcja();*/

function wypiszText(parametr) {
    console.log(parametr)
}
/*wypiszText( 'przykładowy text');*/

function suma(a, b) {
    console.log('suma');
    let sum = a +b;
    console.log(sum);
}
/*suma(1,5);*/

function suma2(a, b) {

    return a+b;
}
/*let sum = suma2(1, 3);
console.log(sum);*/

let a = 5;
function modyfikuj(liczba) {
    liczba = 1;
}
console.log(a);

modyfikuj(a);

console.log(a);

let array =['jeden', 'dwa', 'trzy'];

function modyfkuj2(tablica) {
    /* ['jeden', 'dwa', 'trzy']
    tablica[0] = 'nowa wartość';
}
console.log(array);

modyfkuj2(array);

console.log(array);