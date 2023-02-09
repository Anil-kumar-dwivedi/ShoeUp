import { useParams } from "react-router";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./GetAllProduct.css";
import MerchantLandingPage from "../merchantlanding/MerchantLandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

const GetAllProduct = () => {
  let { mid } = useParams();
  const [productList, getProductList] = useState([]);
  const navigate = useNavigate();
  console.log(mid);

  useEffect(function () {
    getData();
  }, []);

  function deleteOperation(pid) {
    fetch("http://172.16.28.120:8080/delete?pId=" + pid, {
      method: "DELETE",
    });
    getData();
  }

  function getData() {
    //send Mid and name to fetch
    fetch("http://172.16.28.120:8080/findbyId?id=" + mid, {
      method: "GET",
    })
      .then((res) => {
        console.log("Got Response", res);
        if (res.status === 2000 || res.status === 202) {
          console.log("Done  -SUCCESS");
        }
        return res.json();
      })
      .then((res) => {
        if (res?.length) {
          getProductList(res);
        }
      })
      .catch((e) => {
        console.error("SOMETHING FAILDED HERE", e);
      });
  }
  console.log();
  return (
    <div>
      <header id="header-for-all-products">Products</header>

      <Table responsive striped bordered hover>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
          <th>Size</th>
          <th>Color</th>
          <th>productImage</th>
          <th>Operations</th>
        </tr>

        {productList.map((item) => (
          <tr>
            <th>{item.productName}</th>
            <th>{item.price}</th>
            <th>{item.stock}</th>
            <th>{item.description}</th>
            <th>{item.size}</th>
            <th>{item.color}</th>
            <th>
              <img
                id="image-wrapper"
                src={item.productImage}
                alt="productImgs"
              />
            </th>
            <td>
              <span
                className="delete"
                onClick={() => deleteOperation(item.productId)}
              >
                Delete
              </span>
            </td>
            <td>
              <span
                className="update"
                onClick={function () {
                  navigate(
                    `/update-product/${item.productId}/${mid}/${item.staticId}`
                  );
                }}
              >
                Update
              </span>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default GetAllProduct;
