class KontaktyApp {
    constructor() {
        this.kontakty = [];
    }

    dodajKontakt(daneKontaktu) {
        this.kontakty.push(daneKontaktu);
    }

    pobierzOstatnieId() {
        let kontaktyDlugosc = this.kontakty.length;
        let ostatnieId = 0;
        if (kontaktyDlugosc > 0) {
            ostatnieId = this.kontakty[kontaktyDlugosc-1].pobierzId();
        }
        return ostatnieId;
    }

    usunKontakt(idKontaktu) {
        console.log(idKontaktu)
        console.log(this.kontakty)
        for(let i = 0; i < this.kontakty.length; i++) {
            if (this.kontakty[i].pobierzId() == idKontaktu) {
                this.kontakty.splice(i, 1);
                break;
            }
        }
    }

    szukajKontakt(wartoscWyszukiwania) {
        wartoscWyszukiwania = wartoscWyszukiwania.toUpperCase();
        for(let i = 0; i < this.kontakty.length; i++) {
            if(this.kontakty[i] !== undefined && this.kontakty[i].pobierzNazwe().toUpperCase().indexOf(wartoscWyszukiwania) > -1) {
                document.querySelector('.kontaktBox_'+this.kontakty[i].pobierzId()).style.display = 'flex';
            } else {
                document.querySelector('.kontaktBox_'+this.kontakty[i].pobierzId()).style.display = 'none';

            }
        }
    }

    wyswietlKontakty(typ) {
        const boxKontakty = document.querySelector('.kontaktyBox');
        if (typ == 'poDodaniu') {
            let kontaktyDlugosc = this.kontakty.length;
            boxKontakty.innerHTML += `<div class="kontaktBox kontaktBox_${this.kontakty[kontaktyDlugosc-1].pobierzId()}">
                <div class="img"><i class="fa-solid fa-user"></i></div>
                <div class="dataBox">
                    <div class="name">${this.kontakty[kontaktyDlugosc-1].pobierzNazwe()}</div>
                    <div class="phoneNumber">${this.kontakty[kontaktyDlugosc-1].pobierzNrTel()}</div>
                </div>
                <div class="delete">
                    <button data-id="${this.kontakty[kontaktyDlugosc-1].pobierzId()}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`;
        } else if (typ == 'poUsunieciu') {
            boxKontakty.innerHTML = '';
            this.kontakty.forEach(element => {
                boxKontakty.innerHTML += `<div class="kontaktBox kontaktBox_${element.pobierzId()}">
                <div class="img"><i class="fa-solid fa-user"></i></div>
                <div class="dataBox">
                    <div class="name">${element.pobierzNazwe()}</div>
                    <div class="phoneNumber">${element.pobierzNrTel()}</div>
                </div>
                <div class="delete">
                    <button data-id="${element.pobierzId()}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`;
            })
        }
    }
}