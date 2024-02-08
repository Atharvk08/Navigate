import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const Buyer = mongoose.model('Buyer',UserSchema);

export const addNewBuyer = (req, res) =>{

    const newBuyer =new Buyer(req.body);
    newBuyer.save()
    .then(savedBuyer => {
        console.log('Buyer saved successfully:', savedBuyer);
      })
      .catch(error => {
        console.error('Error saving Buyer:', error);
      });
};

export const getBuyers = (req,res )=>{
    Buyer.find({} ,(err,buyer) =>{
        if(err){
            res.send(err);
        }else{
            res.json(buyer);
        }
    })
}

export const getBuyerWithID =(req,res)=>{
    let BuyerID = req.params.BuyerID;
    Buyer.findById(BuyerID,(err,buyer)=>{
        if(err){
            res.send(err);
        }else{
            res.json(buyer);
        }
    })
}


export const updateBuyer =(req,res) =>{
    Buyer.findOneAndUpdate({_id:req.params.BuyerID},{new: true}, (err,buyer) =>{
        if(err){
            res.send(err);
        }else{
            res.json(buyer);
        }  
    })
}

export const deleteBuyer =(req,res) =>{
    Buyer.findByIdAndDelete({_id: req.params.BuyerID},(err,buyer) =>{
        if(err){
            res.send(err);
        }else{
            res.json({'message' :'Succefully deleted buyer'});
        }  
    })
}