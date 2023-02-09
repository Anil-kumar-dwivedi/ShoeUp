import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GetAllProduct from "./component/merchant/getallproducts/GetAllProduct";
import MerchantLandingPage from "./component/merchant/merchantlanding/MerchantLandingPage";
import UpdateProduct from "./component/merchant/updateproduct/UpdateProduct";
import AddProduct from "./component/merchant/addproduct/AddProduct";
import SearchByName from "./component/merchant/searchbyname/SearchByName";
import { useNavigate, Navigate } from "react-router-dom";
import Update from "./component/merchant/updateproduct/UpdateProduct";
import MerchantHome from "./component/merchant/home/MerchantHome";
import AddNewProduct from "./component/merchant/addproduct/addnewproduct/AddNewProduct";
import AddFromCatalog from "./component/merchant/addproduct/addfromcatalog/AddFromCatalog";
import AddProductCard from "./component/merchant/addproduct/addfromcatalog/addcardfromcatalog/AddProductCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <MerchantLandingPage />
          <Routes>
            // to merchant landing home
            <Route path="/merchant-home" exact element={<MerchantHome />} />
            //to update products
            <Route
              path="/update-product/:id/:mid/:staticId"
              exact
              element={<UpdateProduct />}
            />
            // to add products
            <Route path="/add-product/:mid" exact element={<AddProduct />} />
            //add new product
            <Route
              path="/add-new-product/:mid"
              exact
              element={<AddNewProduct />}
            />
            //add from catalog
            <Route
              path="/add-from-catalog/:mid"
              exact
              element={<AddFromCatalog />}
            />
            <Route
              path="/add-product-from-catalog/:pid/:mid"
              exact
              element={<AddProductCard />}
            />
            //all products by mid
            <Route
              path="/all-products/:mid"
              exact
              element={<GetAllProduct />}
            />
            //search by Name
            <Route
              path="/search-by-name/:mid/:name"
              exact
              element={<SearchByName />}
            />
            <Route
              path="*"
              element={<Navigate to="/merchant-home" replace={true} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
