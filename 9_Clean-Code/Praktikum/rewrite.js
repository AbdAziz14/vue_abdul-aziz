
class Kendaraan {

    constructor(totalRoda = 0, kecepatanPerJam = 0){
        this->totalRoda       = totalRoda;
        this->kecepatanPerJam = kecepatanPerJam;
    }

}

class Mobil extends Kendaraan {

    constructor(totalRoda, kecepatanPerJam){
        super(totalRoda,kecepatanPerJam);
    }

    Melaju() {
        return Percepatan(10);
    }


    Percepatan (PerubahanKecepatan){
        return kecepatanPerJam + PerubahanKecepatan;
    }

}


Void Main(){

    MobilCepat = new Mobil();
    MobilCepat.Melaju();
    MobilCepat.Melaju();
    MobilCepat.Melaju();

    MobilLambat = new Mobil();
    MobilLambat.Melaju();

}

