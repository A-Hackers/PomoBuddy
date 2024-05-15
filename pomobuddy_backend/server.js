import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.port

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URI), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log('MongoDB is connected');
    } catch (err) {
        console.err(err.message);
        process.exit(1);
        
    }
}

connectDB().then(() => {
    app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
}).catch(err => console.log(err));

app.get('/', (req,res) => {
    res.json({msg:'backend server running'})
})