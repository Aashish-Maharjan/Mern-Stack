import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts=async(req,res)=>{
    try {
        const products = await Product.find({});//find ma parameters blank rakhyo bhane chai tesle sabai products hru fetch garxa
        res.status(200).json({success:true,dat:products});
    } catch (error) {
        console.log("Error in fetching the products",error.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
}

export const createProducts=async (req,res)=>{
    const product =req.body; //user will send this data\
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false,message:"Please provide all fields"})
    }

    const newproduct = new Product(product);
    
    try {
        await newproduct.save(); //this will save the new product to the database
        res.status(201).json({success:true,data:newproduct});
    } catch (error) {
        console.error("Error in create product:",error.message);
        res.status(500).json({suceess:false,message:"Server error"});
    }
};

export const updateProducts = async(req,res)=>{
    const{id}=req.params;

    const product=req.body;
    
    try {
        const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});

    } catch (error) {
        res.status(500).json({success:false,message:"Server Error"});
    }

};

export const deleteProducts = async(req,res) =>{
    const{id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product id"});
    } 
     
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted"});
    } catch (error) {
        console.log("Error in deleting the product:",error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
};