import { Router } from "express"
import ChatManager from "../daos/mongodb/ChatManager.class.js";
import __dirname from "../utils.js";

let chatManager = new ChatManager()

const router = Router()

router.get('/messages', async (req, res) => {
    let messages = await chatManager.getMessages();
    res.send({ messages })
});

router.post('/messages', async (req, res) => {
    const newMessage = req.body;
    await chatManager.addMessage(newMessage);
    const messages = await chatManager.getMessages();
    req.socketServer.sockets.emit('update-messages', messages);
    res.send({status: "success"});
});

export default router;
