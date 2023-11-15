const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const Product = require("./models/index.jsx");
require("dotenv").config();
require("./config");
const path = require("path");
const transporter = require('./config/transporter.js');

const PORT = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist")));





app.use((req, res, next) => {
    if (req.path.startsWith("/server")) {
      req.url = req.url.replace("/server", ""); 
    }
    next();
  });




app.post("/submitForm", async (req, res) => {
    try {
      const { name, email, priceRange, lookedForItem } = req.body;
  
      const mailOptions = {
        from: email,
        to: "afuereno@gmail.com",
        subject: "New Form Submission",
        text: `
          Name: ${name}
          Email: ${email}
          Price Range: ${priceRange}
          Looked For Item: ${lookedForItem}
        `,
      };
    const info = await transporter.sendMail(mailOptions);
      console.log("Email sent", info.response);
      res.status(200).send("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  










app.post("/products", async (req, res) => {
  try {
    const newProduct = req.body;
    if (!newProduct.title || !newProduct.description || !newProduct.price) {
      res.status(400).send("Bad Request: Product name and price are required.");
    } else {
      const product = await Product.create(newProduct);
      console.log(`Created product: ${product}`);
      res.status(201).send(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error: Failed to create the product.");
  }
});

app.get("/products", async (req, res) => {
  try {
    const productArray = await Product.find();
    res.json(productArray);
    console.log(productArray);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("An error occurred while fetching goods.");
  }
});





app.get("/products/:id", async (req, res) => {
    const id = req.params.id;
  
    if (id === "favicon.ico" && id == {productType}) {
      
      return res.status(204).end();
    }
  
    try {
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).send("Product not found");
      } else {
        res.json(product);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).send("An error occurred while fetching the product");
    }
  });
  





// app.use((err, req, res, next) => {
//     console.error("Error:", err);
//     res.status(500).send("Internal Server Error");
//   });




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
