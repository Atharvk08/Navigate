import { addNewBuyer,  deleteBuyer,  getBuyerWithID,  getBuyers, updateBuyer } from "../controllers/buyerController";

const routes= (app) =>{
    app.route('/buyer')
    .get( (req,res) =>{
        res.send('GET req');
    })
    //post a new Buyer
    .post(addNewBuyer);

    app.route('/buyer/:buyerID')
// get specific Buyer
    .get(getBuyerWithID)
// update the Buyer
    .put(updateBuyer)
// delete the Buyer
    .delete(deleteBuyer)
}

export default routes