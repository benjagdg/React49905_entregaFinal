import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import Category from "../pages/Category";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../pages/Cart";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/category/:name" element={ <Category /> } />
          <Route path="/product/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
