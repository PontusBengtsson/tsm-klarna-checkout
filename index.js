import express from "express";
const app = express();
import {config} from "dotenv";
config();



app.get("/", async (request, response) => {
    const markup = "<h1>Hello Klarna</h1>";
    response.send(markup);
});

app.get("/products/:id", async (request, response) => {
    const { id } = request.params;
    const markup = `<h1> Hello ${id}</h1>`
    response.send(markup);
});

app.get("/confirmation", async (request, response) => {
    const markup = `<h1> Hello Confirmation</h1>`
    response.send(markup);
});




app.listen(process.env.PORT);