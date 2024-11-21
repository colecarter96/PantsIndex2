import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('pants-index-2'); // Replace with your database name
    const collection = db.collection('pants'); // Replace with your collection name

    const pants = await collection.find({}).toArray();
    return NextResponse.json(pants);
  } catch (error) {
    console.error('Error fetching pants data:', error);
    return NextResponse.json({ error: 'Failed to fetch pants data' }, { status: 500 });
  }
}
