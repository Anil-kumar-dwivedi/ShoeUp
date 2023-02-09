import { useParams } from "react-router";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import MerchantLandingPage from "../merchantlanding/MerchantLandingPage";

const AddProduct = () => {
  let { mid } = useParams();
  const navigate = useNavigate();
  // console.log(mid);
  return (
    <div id="main-div">
      
        <span
          id="Add-new-btn"
          onClick={function () {
            navigate(`/add-new-product/${mid}`);
          }}
        >
          Add New Product
        </span>
      
      
        <span
          id="Add-from-catalog-btn"
          onClick={function () {
            navigate(`/add-from-catalog/${mid}`);
          }}
        >
          Add from catalog
        </span>
      
    </div>
  );
};

export default AddProduct;
