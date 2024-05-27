import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users.js'

dotenv.config();


const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes)



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