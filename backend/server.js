import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js "


dotenv.config('/Users/aashishmaharjan/Documents/GitHub/Mern-Stack/.env');

const app=express();
app.use(express.json()); //allows us to accept JSON data in req.body

app.post("/api/products",async (req,res)=>{
    const product =req.body; //user will send this data\
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false,message:"Please provide all fields"})
    }

    const newproduct = new Product(product);
    
    try {
        await newproduct.save(); //this will save the new product to the database
        req.status(201).json({success:true,data:newProduct});
    } catch (error) {
        console.error("Error in create product:",error.message);
        res.status(500).json({suceess:false,message:"Server error"});
    }
}) ;

app.listen(3000,()=>{
    connectDB();
    console.log('Server started at http://localhost:3000 ');
});
