import mongoose from "mongoose";
import { productsModel } from "./models/products.model.js";

export default class ProductManager {
    connection = mongoose.connect("mongodb+srv://ezequielleiblich:1Q2w3e4r@leibliche.nmve4kb.mongodb.net/ecommerce?retryWrites=true&w=majority");
    
    async addProduct(product) {
        try{
        let result = await productsModel.create(product);
        return result;
        }catch(e){
            console.log(e)
            return e
        }
    }
    async getProducts(limit = null) {
        let result = await productsModel.find().lean();
        return result;
    }
    
    async getProductById(id) {
        let result = await productsModel.findOne({ _id: id });
        return result;
    }
    
    async updateProduct(id, updatedProduct) {
        let result = await productsModel.updateOne(
            { _id: id },
            { $set: updatedProduct }
        );
        return result;
    }
    
    async deleteProduct(id) {
        let result = await productsModel.deleteOne({ _id: id });
        return result;
    }
}