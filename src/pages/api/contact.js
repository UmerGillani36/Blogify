import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://new_user_36:SyKD3QMspWYcd6Pa@cluster0.2hss9zy.mongodb.net/?retryWrites=true&w=majority'
      );
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }
    try {
      const db = client.db();
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: 'Storing Messages failed' });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: 'Successfully stored message', data: newMessage });
  }
}

export default handler;
