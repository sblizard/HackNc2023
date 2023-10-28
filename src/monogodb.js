const { MongoClient } = require('mongodb');
async function fetchDataPatients() {
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
////////
async function fetchDataWorkers() {
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
    constructor(name, age, injury_name, injury_details, severity, room_number) {
        this.name = name;
        this.injury = injury_name;
        this.injury_details = injury_details;
        this.severity = severity;
        this.room_number = room_number;
        createDocumentPatients(name, age, injury_name, injury_details, severity, room_number);
    }
}


const EthanHarris = new Worker("Ethan Harris", "Nurse", "6:00", "18:00", 50, 60);
const JordanMartinez = new Worker("Jordan Martinez", "Nurse", "5:00", "3:00", 80, 75);
const CameronTurner = new Worker("Cameron Turner", "Nurse", "9:00", "22:00", 40, 30);
const MasonAnderson = new Worker("Mason Anderson", "Nurse", "5:00", "16:00", 75, 75);
const OliviaMitchell = new Worker("Olivia Mitchell", "Nurse", "7:00", "22:00", 60, 60);
const AvaThompson = new Worker("Ava Thompson", "Nurse", "8:00", "23:00", 75, 75);


console.log();

