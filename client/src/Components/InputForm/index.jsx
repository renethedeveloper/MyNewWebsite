import { useState } from 'react';
import axios from 'axios';
import "./index.css"

const InputProducts = () => {


    const [productData, setProductData] = useState({
        type:"",
        title: "",
        description: "",
        image: "",
        price: 0,
        isAvailable: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData);
        console.log("Testing before Axios call")
        axios({
            method: "POST",
            url: "http://localhost:3000/server/products",   
            data: productData // You will find this data in ***req.body*** of the route
        }).then((res) => {
            
            console.log(res);
            console.log("we got this far.")
        });
    }

    return (
        <div>
            <h1>DreamPop Inventory</h1>
            <form onSubmit={handleSubmit}>
    Type: <input type="text" name="type" value={productData.type} onChange={(e) => setProductData({ ...productData, type: e.target.value })} />
    <br />
    Title: <input type="text" name="title" value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
    <br />
    Description: <input type="text" name="description" value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
    <br />
    Image: <input type="text" name="image" value={productData.image} onChange={(e) => setProductData({ ...productData, image: e.target.value })} />
    <br />
    Price: <input type="number" name="price" value={productData.price} onChange={(e) => setProductData({ ...productData, price: +e.target.value })} />
    <br />
    Is Available: <input type="checkbox" name="isAvailable" checked={productData.isAvailable} onChange={(e) => setProductData({ ...productData, isAvailable: e.target.checked })} />
    <br />
    <button>Add inventory</button>
</form>

        </div>
    );
}

export default InputProducts;
