import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import app from './app'


dotenv.config({ path: `./config.env` });

const DB: string = process.env.DATABASE || ''; // Provide a default value or handle the undefined case

mongoose.connect(DB)
    .then(() => console.log('DB connection successful!'))
    .catch((err: Error) => console.error('DB connection error:', err));

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});