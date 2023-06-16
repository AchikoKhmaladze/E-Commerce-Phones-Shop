import Header from "./components/Header";
import Home from "./pages/Home";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Samsung from "./pages/Samsung";
import Apple from "./pages/Apple";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import About from "./pages/About";
import ScrollToTop from "react-scroll-to-top";

export const Context = createContext(null);
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Context.Provider
        value={{
          cart,
          setCart,
        }}
      >
        <BrowserRouter>
          <ScrollToTop
            smooth
            width="40px"
            top={600}
            className="rounded-full md:right-[30px] bg-gray-300 right-[15px] flex items-center justify-center"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devices/apple" element={<Apple />} />
            <Route path="/devices/samsung" element={<Samsung />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/about" element={<About />} />

            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
