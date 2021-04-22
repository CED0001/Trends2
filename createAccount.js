//verbetering voor in de toekomst: ww wordt pas gecontrolleerd in de user, doe dit al meteen na het ophalen van de data

window.onload = function () {
  console.log(`Hello World`);
  if (window.jQuery) {
    // jQuery is loaded
    console.log();
    ("jquery loaded!");
  } else {
    // jQuery is not loaded
    console.log();
    ("jquery is dead my man");
  }
  // $("#btnCreateAccount").on("click", () => {
  //     console.log(`Button clicked`);
  //     let form = $("form").serialize();
  //     console.log(form);

  // })
  $("form").submit(function (event) {
    event.preventDefault();
    console.log(`submit initiated`);
    let form = $(this).serializeArray();
    // console.log($(this).serializeArray());
    console.log(form);
    let user = new User(form);
    alert(`Confirmeer uw email om uw account creatie af te ronden.`);
  });
};

class User {
  constructor(array) {
    console.log(`User constructor initiated`);
    this.data = [...array];
    this.naam = "";
    this.achternaam = "";
    this.email = "";
    this.geboortedatum = null;
    this.telefoonnummer = 0;
    this.adresStraat = "";
    this.adresNummer = 0;
    this.adresStad = "";
    this.adresPostcode = 0;
    this.wachtwoord = "";
    this.init();
    this.monitor();
  }
  init() {
    console.log(`user init initiated`);
    this.naam = this.data[0].value;
    this.achternaam = this.data[1].value;
    this.email = this.data[2].value;
    this.geboortedatum = Date.parse(this.data[3].value);
    this.telefoonnummer = this.data[4].value;
    this.adresStraat = this.data[5].value;
    this.adresNummer = this.data[6].value;
    this.adresStad = this.data[7].value;
    this.adresPostcode = this.data[8].value;
    if (
      this.data[9].value === this.data[10].value &&
      this.data[9].length >= 8 &&
      this.data[10].length >= 8
    ) {
      this.wachtwoord = this.data[9].value;
    } else {
      alert(
        "Wachtwoorden komen niet overeen of ze zijn te kort, probeer opnieuw."
      );
    }
  }
  monitor() {
    // console.log(this);
    console.log(`naam:${this.naam} achternaam:${this.achternaam} email:${this.email} geboortedatum:${this.geboortedatum} telefoon:${this.telefoonnummer}
        straat:${this.adresStraat} adresnummer:${this.adresNummer} stad:${this.adresStad} postcode${this.adresPostcode} ww:${this.wachtwoord}`);
  }
}
