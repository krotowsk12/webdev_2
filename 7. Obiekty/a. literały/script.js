let osoba = {
    imie: 'Adam',
    nazwisko: 'Nowak',

        przedstawSie: function f() {
        console.log('Nazywam się'+this.imie''+ this.nazwisko);

    },

    zmienImie: function (noweImie) {
        this.imie'noweImie';
    }
};
osoba.przedstawSie();

osoba.imie ='Jacek';

osoba.przedstawSie();

