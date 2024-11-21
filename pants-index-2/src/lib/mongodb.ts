import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

// Extend the NodeJS global type to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to preserve value across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// import { MongoClient } from 'mongodb';


// if (!process.env.MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, { ...options, useUnifiedTopology: true });
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, { ...options, useUnifiedTopology: true });
//   clientPromise = client.connect();
// }

// export default clientPromise;
