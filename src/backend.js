class Worker {
    constructor(name, role, shift_start, shift_end, stress, fatigue) {
        this.name = name;
        this.role = role;
        this.shift_start = shift_start;
        this.shift_end = shift_end;
        this.stress = stress;
        this.fatigue = fatigue;
    }
}


class Patient {
    constructor(name, age, bio, injury, severity, room_number, details) {
        this.name = name;
        this.bio = bio;
        this.injury = injury;
        this.severity = severity;
        this.room_number = room_number;
        this.details = details;
    }
}