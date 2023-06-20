import mongoose from 'mongoose';
import { messageModel } from "./models/messages.model.js";

export default class ChatManager {
    connection = mongoose.connect('mongodb+srv://ezequielleiblich:1Q2w3e4r@leibliche.nmve4kb.mongodb.net/ecommerce?retryWrites=true&w=majority')
    
    async getMessages () {
        let result = await messageModel.find().lean();
        return result;
    }


    async postMessage () {
        const result = await messageModel.create({ messages: [] });
        return result;
    }
}

