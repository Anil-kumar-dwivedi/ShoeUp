import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MerchantLandingPage from "../../merchantlanding/MerchantLandingPage";

const AddFromCatalog = () => {
  let { mid } = useParams();
  console.log(mid);
  const [catalog, setcatalog] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    getData();
  }, []);

  function getData() {
    //send Mid and name to fetch
    fetch("http://172.16.28.120:8080/getStatic", {
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
          setcatalog(res);
        }
      })
      .catch((e) => {
        console.error("SOMETHING FAILDED HERE", e);
      });
  }
  return (
    <div>
      <header>Add From catalog</header>
      <Table striped bordered hover>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Color</th>
          <th>productImage</th>
          <th>Operations</th>
        </tr>

        {catalog.map((item) => (
          <tr>
            <th>{item.productName}</th>
            <th>{item.description}</th>
            <th>{item.color}</th>
            <th>
              <img
                id="image-wrapper"
                src={item.productImage}
                alt="productImgs"
              />
            </th>
            <td></td>
            <td>
              <span
                id="add"
                style={{ border: "solid" }}
                onClick={function () {
                  navigate(`/add-product-from-catalog/${item.id}/${mid}`);
                }}
              >
                Add
              </span>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default AddFromCatalog;
