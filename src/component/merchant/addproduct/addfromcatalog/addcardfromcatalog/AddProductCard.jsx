import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import MerchantLandingPage from "../../../merchantlanding/MerchantLandingPage";

const AddProductCard = () => {
  let { pid, mid } = useParams();
  console.log(pid, mid);
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [size, setSize] = useState();

  const onPriceChange = function (e) {
    const value = e.target.value;
    setPrice(value);
  };

  const onStockChange = function (e) {
    const value = e.target.value;
    setStock(value);
  };

  const onSizeChange = function (e) {
    const value = e.target.value;
    setSize(value);
  };

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      price,
      stock,
      staticId: pid,
      size,

      merchantId: mid,
    };

    fetch("http://172.16.28.120:8080/addExisting", {
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
      <form id="my-form" onSubmit={onSubmit}>
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

        <button className="btn" type="submit" value="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProductCard;
