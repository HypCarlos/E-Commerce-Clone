import express from 'express';
import { products } from "./data.js";

const app = express();

app.get('/api/products', (req,res) => {
    res.send(products);
});

app.get('/', (req,res) => {
    res.send("SERVER IS READY");
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON https://localhost:${port}`);
});

