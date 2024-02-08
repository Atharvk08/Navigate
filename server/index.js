import express from 'express';

// DB
import mongoose, { mongo } from 'mongoose'; 
import bodyParser from 'body-parser';
// 

// import Routers
import buyerRoutes from './src/routes/buyerRouter'
import sellerRoutes from './src/routes/sellerRouter'

const app =express();

// mongoose connection

const DBUrl = 'mongodb://localhost:27017/NavigateAppDB'
mongoose.Promise = global.Promise;


//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//-- mongoose collection

routes(app);

const PORT= 5000;
app.get('/', (req,res) =>{
    res.send(`Node server ${PORT}`);
});

app.listen(PORT, () =>{
    console.log(`your server is running on ${PORT}`);
})