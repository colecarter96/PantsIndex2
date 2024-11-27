import { MongoClient } from "mongodb";

// // Retrieve the MongoDB URI from environment variables
// const uri = process.env.MONGODB_URI;

// if (!uri) {
//     throw new Error("Please add your MongoDB URI to .env.local");
// }

// // Global variable to store the MongoDB client across module reloads in development
// let client;
// let clientPromise;

// if (process.env.NODE_ENV === "development") {
//     // In development mode, use a global variable to preserve the client during hot reloads
//     if (!global._mongoClientPromise) {
//         client = new MongoClient(uri);
//         global._mongoClientPromise = client.connect();
//     }
//     clientPromise = global._mongoClientPromise;
// } else {
//     // In production, create a new MongoClient instance
//     client = new MongoClient(uri);
//     clientPromise = client.connect();
// }

// export default clientPromise;


// Retrieve the MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("Please add your MongoDB URI to .env.local");
}

// Global variable to store the MongoDB client across module reloads in development
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable to preserve the client during hot reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, create a new MongoClient instance
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
