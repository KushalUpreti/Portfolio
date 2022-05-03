import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = await MongoClient.connect(`mongodb+srv://IcyHotShoto:ClqlGSKkIunBA4ha@cluster0.dbftm.mongodb.net/form?retryWrites=true&w=majority`);
    const db = client.db();
    const coll = db.collection('homeform');
    let result = await coll.find().toArray();
    res.status(200).json(result)
}
