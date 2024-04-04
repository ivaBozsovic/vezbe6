//primitivni tipovi
let godine:number=25;
let ime:string="Iva";
let studira:boolean=true;

//nizovi

let predmeti:string[]=["EPOS","Klijentske","Cloud"]; //niz stingova

let ocene:number[]=[10,9,8]; //niz brojeva

//Tuple

let tuple:[string,number]=["Iva",20];

//enum

enum Modul{
    TehnologijeElekronskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul=Modul.TehnologijeElekronskogPoslovanja;

//objekti

let student:{ime:string,godine:number,studira:boolean}={
    ime:"Iva",
    godine:20,
    studira:true
};

//unija tipova

let brojIliString:number | string=10;

//any tip

let biloKojiTip:any="moze biti bilo koji tip";

// void tip

function cao():void{
    console.log("cao");
}

//null undefined

let n:null=null;
let u:undefined=undefined;

//type assertions

let nekaVrednost:any="Neki string";
let duzinaStringa:number=(nekaVrednost as String).length;
console.log("duzina stringa je:",duzinaStringa);
console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n,u);
