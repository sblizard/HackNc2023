const { MongoClient } = require('mongodb');


async function fetchDataPatients() {
    //gets values from database
    const mongoClient = new MongoClient('mongodb+srv://sblizard:chrjtStsMuWNaIfZ@hacknc2023.x9pnsi7.mongodb.net/Patients?retryWrites=true&w=majority');

    try {
        await mongoClient.connect();
        const data = await mongoClient.db().collection('Patients').find({}).toArray();
        console.log(data);
    } finally {
        await mongoClient.close();
    }
}


async function createDocumentPatients(name, age, injury_name, injury_details, severity, room_number) {
    //uploads values of patients in database
    const mongoClient = new MongoClient('mongodb+srv://sblizard:chrjtStsMuWNaIfZ@hacknc2023.x9pnsi7.mongodb.net/Patients?retryWrites=true&w=majority');

    try {
        await mongoClient.connect();
        const result = await mongoClient.db().collection('Workers').insertOne({ name, age, injury_name, injury_details, severity, room_number });
        console.log(`Document inserted with ID: ${result.insertedId}`);
    } catch (err) {
        console.error('Error inserting document:', err);
    } finally {
        await mongoClient.close();
    }
}

async function updateDocumentPatients(name, value_type, updated_value) {
    //updates values of patients
    const mongoClient = new MongoClient('mongodb+srv://sblizard:chrjtStsMuWNaIfZ@hacknc2023.x9pnsi7.mongodb.net/Patients?retryWrites=true&w=majority');

    try {
        await mongoClient.connect();

        const collection = mongoClient.db().collection('Patients'); // Get the collection

        const filter = { name: name };
        const update = { $set: { [value_type]: updated_value } }; // Use square brackets for dynamic keys

        const result = await collection.updateOne(filter, update);
        console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
    } catch (err) {
        console.error('Error updating document:', err);
    } finally {
        await mongoClient.close();
    }
}


async function fetchDataWorkers() {
    //gets worker values from databse
    const mongoClient = new MongoClient('mongodb+srv://sblizard:chrjtStsMuWNaIfZ@hacknc2023.x9pnsi7.mongodb.net/Workers?retryWrites=true&w=majority');

    try {
        await mongoClient.connect();
        const data = await mongoClient.db().collection('Workers').find({}).toArray();
        console.log(data);
    } finally {
        await mongoClient.close();
    }
}


async function createDocumentWorkers(name, role, shift_start, shift_end, stress, fatigue) {
    //adds worker to database
    const mongoClient = new MongoClient('mongodb+srv://sblizard:chrjtStsMuWNaIfZ@hacknc2023.x9pnsi7.mongodb.net/Workers?retryWrites=true&w=majority');

    try {
        await mongoClient.connect();
        const result = await mongoClient.db().collection('Workers').insertOne({ name, role, shift_start, shift_end, stress, fatigue });
        console.log(`Document inserted with ID: ${result.insertedId}`);
    } catch (err) {
        console.error('Error inserting document:', err);
    } finally {
        await mongoClient.close();
    }
}


async function updateDocumentWorkers(name, value_type, updated_value) {
    //updates value of workers
    const mongoClient = new MongoClient('mongodb+srv://sblizard:chrjtStsMuWNaIfZ@hacknc2023.x9pnsi7.mongodb.net/Workers?retryWrites=true&w=majority');

    try {
        await mongoClient.connect();

        const collection = mongoClient.db().collection('Workers'); // Get the collection

        const filter = { name: name };
        const update = { $set: { [value_type]: updated_value } }; // Use square brackets for dynamic keys

        const result = await collection.updateOne(filter, update);
        console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
    } catch (err) {
        console.error('Error updating document:', err);
    } finally {
        await mongoClient.close();
    }
}


class Worker {
    //Worker class
    static instances = [];
    constructor(name, role, shift_start, shift_end, stress, fatigue) {
        this.name = name;
        this.role = role;
        this.shift_start = shift_start;
        this.shift_end = shift_end;
        this.stress = stress;
        this.fatigue = fatigue;
        createDocumentWorkers(this.name, this.role, this.shift_start, this.shift_end, this.stress, this.fatigue);
        Worker.instances.push(this);
    }
}


class Patient {
    //Patient class
    constructor(name, age, injury_name, injury_details, severity, room_number) {
        this.name = name;
        this.injury = injury_name;
        this.injury_details = injury_details;
        this.severity = severity;
        this.room_number = room_number;
        createDocumentPatients(name, age, injury_name, injury_details, severity, room_number);
    }
}

//Worker objects
const EthanHarris = new Worker("Ethan Harris", "Nurse", "6:00", "18:00", 50, 60);
const JordanMartinez = new Worker("Jordan Martinez", "Nurse", "5:00", "3:00", 80, 75);
const CameronTurner = new Worker("Cameron Turner", "Nurse", "9:00", "22:00", 40, 30);
const MasonAnderson = new Worker("Mason Anderson", "Nurse", "5:00", "16:00", 75, 75);
const OliviaMitchell = new Worker("Olivia Mitchell", "Nurse", "7:00", "22:00", 60, 60);
const AvaThompson = new Worker("Ava Thompson", "Nurse", "8:00", "23:00", 75, 75);


//Patient objects
const BenjaminMitchell = new Patient("Benjamin Mitchell", 46, "Anaphylaxis", "Alergic reaction to eating food that contained peanuts.", 60, 405);
const EthanReynolds = new Patient("Ethan Reynolds", 14,"High Fever", "Came into the hospital with a fever of 102 -- sevearly dehydrated.", 89, 103);
const LucasAnderson = new Patient("Lucas Anderson", 78, "Severe Abdominal Pain", "Came in complaining of intense pain in his abdomin and a slight fever.", 64, 278);
const DanielThompson = new Patient("Daniel Thompson", 55, "Concussion", "Got a heavy hit while playing football with friends. Was not wearing a helmet and is complaining of the lights being too bright.", 54, 102);
const OliviaParker = new Patient("Olivia Parker", 33, "Severe Burns", "Burnt themselves while setting up a fire pit in their backyard.", 47, 361);
const AvaJohnson = new Patient("Ava Johnson", 14, "Seizures and Neurological Episodes", "Her mother brought her in after witnessing violent shaking and loss of consciousness in her daughter.", 87, 430);
