import { addNewSeller,  deleteSeller,  getSellerWithID,  getSellers, updateSeller } from "../controllers/sellerController";

const routes= (app) =>{
    app.route('/seller')
    .get( (req,res) =>{
        res.send('GET req');
    })
    //post a new Seller
    .post(addNewSeller);

    app.route('/seller/:sellerID')
// get specific Seller
    .get(getSellerWithID)
// update the Seller
    .put(updateSeller)
// delete the Seller
    .delete(deleteSeller)
}

export default routes