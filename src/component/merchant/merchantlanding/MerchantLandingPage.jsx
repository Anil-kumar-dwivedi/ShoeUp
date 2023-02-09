import "./MerchantLandingPage.css";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MerchantLandingPage = () => {
  // let { mid } = useParams();

  let mid = 1;

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const onNameChange = function (e) {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div id="merchant-landing-page">
      <div id="merchant-page-header1">
        <span>Merchant Dashboard</span>
      </div>

      <div id="merchant-page-header2">
        <span
          id="all-products"
          onClick={function () {
            navigate(`/all-products/${mid}`);
          }}
        >
          All Products
        </span>

        <span>
          <input
            id="search-merchant"
            type="text"
            name="name"
            required
            value={name}
            onChange={onNameChange}
            placeholder="search by name.."
          />
        </span>
        <span
          id="search-btn"
          onClick={function () {
            navigate(`/search-by-name/${mid}/${name}`);
          }}
        >
          Search
        </span>

        <span
          id="add-product"
          onClick={function () {
            navigate(`/add-product/${mid}`);
          }}
        >
          Add Product
        </span>
      </div>
    </div>
  );
};

export default MerchantLandingPage;
