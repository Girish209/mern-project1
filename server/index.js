import express from 'express';
import Connection from './database/db.js'
import bodyParser from 'body-parser';
import cors from 'cors'
import  Routes from './routes/route.js'

const app=express();

app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({ extended:true }))

app.use('/',Routes);
Connection();

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})