function Osoba(imieP, nazwiskoP) {
    this.imie = imieP;
    this.nazwisko = nazwiskoP;
    this.przedstawSie = function () {
        console.log('Nazywam się '+ this.imie +' '+ this.nazwisko);
    }
}

let osoba = new Osoba('Jan', 'Kowalski');
osoba.przedstawSie();

let osoba2 = new Osoba('Zenon', 'Kowalski');
osoba2.przedstawSie();