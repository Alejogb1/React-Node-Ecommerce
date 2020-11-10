import express from "express";
import data from "./data"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute"
import bodyParser from "body-parser"

dotenv.config();


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
