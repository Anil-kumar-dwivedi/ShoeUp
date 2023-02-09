import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import MerchantLandingPage from "../merchantlanding/MerchantLandingPage";

const UpdateProduct = () => {
  let { id, mid, staticId } = useParams();
  console.log(id, mid, staticId);
  const [product, setProduct] = useState();
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

  // useEffect(function () {
  //   getData();
  // }, []);

  // function getData() {
  //   //send pidto fetch
  //   fetch("http://172.16.29.148:8080/findbyId?pId=" + id, {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       console.log("Got Response", res);
  //       if (res.status === 2000 || res.status === 202) {
  //         console.log("Done  -SUCCESS");
  //       }
  //       return res.json();
  //     })
  //     .then((res) => {
  //       if (res?.length) {
  //         setProduct(res);
  //       }
  //     })
  //     .catch((e) => {
  //       console.error("SOMETHING FAILDED HERE", e);
  //     });
  // }

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      id,
      staticId,
      merchantId: mid,
      stock,
      price,
      size,
    };
    fetch("http://172.16.29.148:8080/update", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Got Response", res);
        if (res.status === 200 || res.status === 202) {
          console.log("Done  -SUCCESS");
          window.alert("Your product updated");
        }
      })
      .catch((e) => {
        console.error("SOMETHING FAILDED HERE", e);
        window.alert("Your product not updated.. Something went Wrong");
      });
  }

  return (
    <div>
      <header id="header-for-all-products">Update</header>
      <div className="update-card-wrapper">
        <form id="my-form" onSubmit={onSubmit}>
          <div htmlFor="price">
            <label>
              Price:
              <input
                type="number"
                name="price"
                required
                min="1"
                onChange={onPriceChange}
                defaultValue="1"
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
                defaultValue="1"
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
                min="1"
                defaultValue="1"
                onChange={onSizeChange}
              />
            </label>
          </div>
          <button className="btn" type="submit" value="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
