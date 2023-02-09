import React, { useState } from "react";
import "./AddNewproduct.css";
import { useParams } from "react-router";
import MerchantLandingPage from "../../merchantlanding/MerchantLandingPage";
function AddNewProduct() {
  let { mid } = useParams();
  console.log(mid);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [image, setImage] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const onNameChange = function (e) {
    const value = e.target.value;
    setName(value);
  };

  const onCategoryChange = function (e) {
    const value = e.target.value;
    setCategory(value);
  };

  const onDescriptionChange = function (e) {
    const value = e.target.value;
    setDescription(value);
  };

  const onPriceChange = function (e) {
    const value = e.target.value;
    setPrice(value);
  };

  const onStockChange = function (e) {
    const value = e.target.value;
    setStock(value);
  };

  const onImageChange = function (e) {
    const value = e.target.value;
    setImage(value);
  };

  const onSizeChange = function (e) {
    const value = e.target.value;
    setSize(value);
  };

  const onColorChange = function (e) {
    const value = e.target.value;
    setColor(value);
  };

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      productName: name,
      categoryId: category,
      description: Description,
      price,
      stock,
      productImage: image,
      size,
      color,
      merchantId: mid,
    };

    fetch("http://172.16.28.120:8080/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Got Response", res);
        if (res.status === 200 || res.status === 202) {
          console.log("Done  -SUCCESS");
          window.alert("Your product added");
        }
      })
      .catch((e) => {
        console.error("SOMETHING FAILDED HERE", e);
        window.alert("Your Not added something went Wrong");
      });
  }

  return (
    <div>
      <header>Add New product</header>

      <form id="my-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Product Name:
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={onNameChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="category">Choose Category:</label>

          <select onChange={onCategoryChange}>
            <option id="category" name="category" value="1">
              casual
            </option>
            <option id="category" name="category" value="2">
              formal
            </option>
            <option id="category" name="category" value="3">
              sports
            </option>
            <option id="category" name="category" value="4">
              snekeer
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="Description">
            Description:
            <br />
            <textarea
              name="Description"
              type="text"
              required
              value={Description}
              onChange={onDescriptionChange}
            />
          </label>
        </div>

        <div htmlFor="price">
          <label>
            Price:
            <input
              type="number"
              name="price"
              required
              min="0"
              value={price}
              onChange={onPriceChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="stock">
            Stock:
            <input
              type="number"
              name="stock"
              required
              min="0"
              value={stock}
              onChange={onStockChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            Image:
            <input
              type="text"
              name="image"
              required
              value={image}
              onChange={onImageChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="size">
            Size:
            <input
              type="number"
              name="size"
              required
              min="0"
              value={size}
              onChange={onSizeChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="color">
            Colour:
            <input
              type="text"
              name="color"
              required
              value={color}
              onChange={onColorChange}
            />
          </label>
        </div>

        <button className="btn" type="submit" value="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
