const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./data/contacts")
const vehicles = require("./data/vehicles")
const comments = require("./data/comments")
const products = require("./data/products")
const app = express();

app.use(express.static("public"))
app.use(bodyParser.json())
// app.use(express.json())

const port = process.env.PORT || 4000


app.get("/contacts", (req, res) => {
    res.json(contacts)
})

app.get("/contacts/:id", (req, res) => {
    const id = req.params.id
    const contact = contacts.find(contact => contact._id === Number(id))
    res.json(contact)
})

app.post("/contacts", (req, res) => {
    const newContact = {
        "_id": contacts.length + 1,
        ...req.body
    }
    contacts.push(newContact)
    res.json(contacts)
})

app.get("/vehicles", (req, res) => {
    res.json(vehicles)
})

app.get("/vehicles/:id", (req, res) => {
    const id = req.params.id
    const vehicle = vehicles.find(vehicle => vehicle._id === Number(id))
    res.json(vehicle)
})

app.post("/vehicles", (req, res) => {
    const newVehicle = {
        "_id": vehicles.length + 1,
        ...req.body
    }
    vehicles.push(newVehicle)
    res.json(vehicles)
})

app.get("/comments", (req, res) => {
    res.json(comments)
})

app.get("/comments/:id", (req, res) => {
    const id = req.params.id
    const comment = comments.find(comment => comment._id === Number(id))
    res.json(comment)
})

app.post("/comments", (req, res) => {
    const newComments = {
        "_id": comments.length + 1,
        ...req.body
    }
    comments.push(newComments)
    res.json(comments)
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const product = products.find(product => product._id === Number(id))
    res.json(product)
})

app.post("/products", (req, res) => {
    const newProduct = {
        "_id": products.length + 1,
        ...req.body
    }
    products.push(newProduct)
    res.json(products)
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
