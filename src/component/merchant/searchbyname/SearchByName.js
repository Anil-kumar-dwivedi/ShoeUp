import { useParams } from "react-router";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MerchantLandingPage from "../merchantlanding/MerchantLandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchByName = () => {
  let { mid, name } = useParams();

  console.log(mid);
  console.log(name);

  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

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
    fetch(`http://172.16.29.152:8080/get?productName=${name}&id=${mid}`, {
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
          setProductList(res);
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

      <Table striped bordered hover>
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
              <span className="delete" onClick={() => deleteOperation(item.id)}>
                Delete
              </span>
            </td>
            <td>
              <span
                className="update"
                onClick={function () {
                  navigate(`/update-product/${item.id}`);
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

export default SearchByName;
