import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const url = process.env.MONGO_DB_URL;
const kwackDb = process.env.MONGO_DB;
const kwacksCollection = process.env.MONGO_DB_COLLECTION;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/posts', async (req, res) => {
  // todo: check for undefined and reject if a field isn't provided.
  const { id, content, author } = req.body;

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(kwackDb);
    const collection = db.collection(kwacksCollection);
    const result = await collection.insertOne({ id, content, author });
    res.status(201).send(`{"_id":"${result.insertedId}}`);
  } catch (err) {
    console.error(`Error:`, err);
    res.status(500).send("Couldn't create Kwack!");
  }
});

app.get('/posts', async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(kwackDb);
    const collection = db.collection(kwacksCollection);

    const result = await collection.find({}).toArray();
    res.json(result);
  } catch (err) {
    console.error(`Error:`, err);
    res.status(500).send("Couldn't get Kwacks!");
  }
});
app.listen(3000, () => console.log('server started on port 3000'));
