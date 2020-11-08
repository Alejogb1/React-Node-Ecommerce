import express from "express";
import data from "./data"
import dotenv from "dotenv"
import config from "./config"
import userRoute from "./routes/userRoute"
import bodyParser from "body-parser"
import moongose from "mongoose"
dotenv.config();

const mongodbUrl = config.MONGODB_URL
moongose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
}).catch(error => console.error(error.reason))
const app = express()

app.use(bodyParser.json())

app.use("/api/users", userRoute)

app.get("/api/products:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product){
        res.send(product)
    } else {
        res.status(404).send({ msg: "Product Not Found." })
    }
});
app.get("/api/products", (req, res) => {
    res.send(data.products)
});

app.listen(3000, ()=> {console.log("Server started" )})