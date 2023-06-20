import mongoose from "mongoose";
import { cartModel } from "./models/carts.model.js";
import ProductManager from "./ProductManager.class.js";

export default class CartManager {
  connection = mongoose.connect("mongodb+srv://ezequielleiblich:1Q2w3e4r@leibliche.nmve4kb.mongodb.net/ecommerce?retryWrites=true&w=majority");

  productManager = new ProductManager();

  async createCart() {
    const result = await cartModel.create({ products: [] });
    return result;
  }

  async getCartById(id) {
    const result = await cartModel.findOne({ _id: id }).populate('products.product');
    return result;
  }

  async getAllCarts() {
    const result = await cartModel.find();
    return result
  }

  async addProductToCart(cid, pid) {
    const product = await this.productManager.getProductById(pid);
    const cart = await this.getCartById(cid);
    cart.products.push({ product: product });
    await cart.save()
    return;
  }

}