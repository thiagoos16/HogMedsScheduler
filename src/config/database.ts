import mongoose from 'mongoose';
import { env } from './env';

export async function connectToDatabase() {
    try {
        await mongoose.connect(env.MONGO_URI, {
            dbName: 'hog_meds',
        })
        console.log('✅ Connection with MongoDB successful!!');
    } catch (error) {
        console.error('❌ Error in MongoDB connection:', error);
        process.exit(1);
    }
}

