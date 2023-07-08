import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USER=process.env.DB_USER;
const PASS=process.env.DB_PASSWORD;

const Connection=()=>{
    const MONGOURL=`mongodb+srv://${USER}:${PASS}@cluster0.0vxw2jw.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGOURL,{useNewUrlParser:true})
    mongoose.connection.on('connected',()=>{console.log('db connected')})
    mongoose.connection.on('disconnected',()=>{console.log('db not connected')})
    mongoose.connection.on('error',()=>{console.log('error occured',error.message)})
    
}

export default Connection;
