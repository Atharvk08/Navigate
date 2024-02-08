import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const Seller = mongoose.model('Seller',UserSchema);

export const addNewSeller = (req, res) =>{
    const newSeller =new Seller(req.body);
    newSeller.save()
    .then(savedSeller => {
        console.log('Seller saved successfully:', savedSeller);
      })
      .catch(error => {
        console.error('Error saving Seller:', error);
      });
};

export const getSellers = (req,res )=>{
    Seller.find({} ,(err,seller) =>{
        if(err){
            res.send(err);
        }else{
            res.json(seller);
        }
    })
}

export const getSellerWithID =(req,res)=>{
    let SellerID = req.params.SellerID;
    Seller.findById(SellerID,(err,seller)=>{
        if(err){
            res.send(err);
        }else{
            res.json(seller);
        }
    })
}

export const updateSeller =(req,res) =>{
    Seller.findOneAndUpdate({_id:req.params.SellerID},{new: true}, (err,seller) =>{
        if(err){
            res.send(err);
        }else{
            res.json(seller);
        }  
    })
}

export const deleteSeller =(req,res) =>{
    Seller.findByIdAndDelete({_id: req.params.SellerID},(err,seller) =>{
        if(err){
            res.send(err);
        }else{
            res.json({'message' :'Succefully deleted seller'});
        }  
    })
}