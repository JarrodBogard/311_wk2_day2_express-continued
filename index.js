const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require("./routes/contacts");
const vehiclesRouter = require("./routes/vehicles");
const commentsRouter = require("./routes/comments");
const productsRouter = require("./routes/products");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(express.json())
const port = process.env.PORT || 4000;

app.use("/", contactsRouter);
app.use("/", vehiclesRouter);
app.use("/", commentsRouter);
app.use("/", productsRouter);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
