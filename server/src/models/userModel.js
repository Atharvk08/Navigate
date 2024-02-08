import mongoose from "mongoose";

const Schema =mongoose.Schema;
export const UserSchema = new Schema({
    user_id:{
        type: String, 
        required: 'Enter unique name',
        unique
    },
    firstName: {
        type: String,
        required:'Enter a first name'
    },
    lastName: {
        type: String,
        required:'Enter a last name'
    },
    phoneNumber:{
        type:Number
    },
    created_date: {
        type:Date,
        default: Date.now 
    },
    type: {
        type: String,
        required:'Enter a first name'
    },
    isActive : {
        type:Boolean
    },
    latitude : {
        type:Decimal128
    },
    longitude : {
        type:Decimal128
    },
    geohash:{
        type: String
    },
    email: {
        type: String,
    },
    // address
    building: {
        type: String,
    },
    streetName: {
        type: String,
    },
    area: {
        type: String,
    },
    city: {
        type: String,
        required: 'enter city'
    },
    state: {
        type: String,
        required :'enter state'
    },
    country: {
        type: String,
        required: 'enter country'
    },
    pincode: {
        type: Number,
        required: 'enter pincode'
    },
})