import connectToDatabase from '@/lib/mongodb';
import Pants from '@/models/Pants';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      await connectToDatabase();

      // Fetch all pants from the collection
      const pants = await Pants.find({}).lean();
      res.status(200).json(pants);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error fetching pants:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}