import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import Category from "../pages/Category";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/products/:category" element={ <Category /> } />
          <Route path="/product/:productId" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/checkout" element={ <Checkout /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
