class Worker {
    static instances = [];
    constructor(name, role, shift_start, shift_end, stress, fatigue) {
        this.name = name;
        this.role = role;
        this.shift_start = shift_start;
        this.shift_end = shift_end;
        this.stress = stress;
        this.fatigue = fatigue;
        Worker.instances.push(this);
    }
}


const EthanHarris = new Worker("Ethan Harris", "Nurse", "6:00", "18:00", 50, 60);
const JordanMartinez = new Worker("Jordan Martinez", "Nurse", "5:00", "3:00", 80, 75);
const CameronTurner = new Worker("Cameron Turner", "Nurse", "9:00", "22:00", 40, 30);
const MasonAnderson = new Worker("Mason Anderson", "Nurse", "5:00", "16:00", 75, 75);
const OliviaMitchell = new Worker("Olivia Mitchell", "Nurse", "7:00", "22:00", 60, 60);
//const  = new Worker("Jane Doe", "Nurse", "5:00", "3:00", 75, 75);



console.log(Worker.instances);

