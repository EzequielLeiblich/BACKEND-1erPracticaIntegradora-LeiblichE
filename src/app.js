import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import { Server } from "socket.io";
import ProductManager from './daos/mongodb/ProductManager.class.js'

import routerProducts from './routes/products.router.js' 
import routerCarts from './routes/carts.router.js'
import routerViews from './routes/views.router.js'
import routerMessages from './routes/messages.router.js'

// initial configuration

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static

app.use(express.static(__dirname + "/public"));

// handlebars configuration

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");


// server start and socket io

const expressServer = app.listen(8080, () => console.log("Servidor levantado"))
const socketServer = new Server(expressServer)

socketServer.on("connection", async (socket) => {
  console.log("Estas conectado " + socket.id)
  
  let productManager = new ProductManager()
  
  // Se envian todos los productos al conectarse
  socket.emit("update-products", await productManager.getProducts())
  
  // Se agrega el producto y se vuelven a renderizar para todos los sockets conectados
  socket.on("add-product", async (productData) => {
    await productManager.addProduct(productData)
    socketServer.emit("update-products", await productManager.getProducts())
  })
  
  // Se elimina el producto y se vuelven a renderizar para todos los sockets conectados
  socket.on("delete-product", async (productID) => {
    await productManager.deleteProduct(productID)
    socketServer.emit("update-products", await productManager.getProducts())
  })
})



// routers

app.use((req, res, next) => {
  req.socketServer = socketServer;
  next()
});

app.use("/", routerViews);
app.use("/products", routerProducts);
app.use("/carts", routerCarts);
app.use("/messages", routerMessages);