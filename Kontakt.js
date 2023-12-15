class Kontakt {
    constructor(id, nazwa, nrTel) {
        this.id = id;
        this.nazwa = nazwa;
        this.nrTel = nrTel;
    }

    pobierzId() {
        return this.id;
    }

    pobierzNazwe() {
        return this.nazwa;
    }

    pobierzNrTel() {
        return this.nrTel;
    }
}