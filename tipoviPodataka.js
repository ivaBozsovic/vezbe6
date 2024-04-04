//primitivni tipovi
var godine = 25;
var ime = "Iva";
var studira = true;
//nizovi
var predmeti = ["EPOS", "Klijentske", "Cloud"]; //niz stingova
var ocene = [10, 9, 8]; //niz brojeva
//Tuple
var tuple = ["Iva", 20];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElekronskogPoslovanja"] = 0] = "TehnologijeElekronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElekronskogPoslovanja;
//objekti
var student = {
    ime: "Iva",
    godine: 20,
    studira: true
};
//unija tipova
var brojIliString = 10;
//any tip
var biloKojiTip = "moze biti bilo koji tip";
// void tip
function cao() {
    console.log("cao");
}
//null undefined
var n = null;
var u = undefined;
//type assertions
var nekaVrednost = "Neki string";
var duzinaStringa = nekaVrednost.length;
console.log("duzina stringa je:", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
