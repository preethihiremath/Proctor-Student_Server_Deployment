import express, { application } from 'express';
import bodyParser from 'body-parser'; //simplifies requests and u can access headers n all in root
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import meetReqRoutes from './routes/scheduledmeeting.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.get('/' ,(req,res)=>{
res.send('Proctor API Server running')
});

app.use('/posts', postRoutes);
app.use('/api', authRoutes);
app.use('/meet', meetReqRoutes);

const CONNECTION_URL = 'mongodb+srv://preethivhiremath:preethivhiremath@cluster0.srtwx.mongodb.net/test';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
       console.log("Successfully connected to database");
})
.catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
});


app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
