import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomMenu from "./components/CustomMenu/Menu";
import Header from "./components/home/header-hasan/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
// import Dashboard from "./dashbaord";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* frontend all routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/menu" element={<CustomMenu />}></Route>

        {/* login registration routes  */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}


        {/* backend all routes start  */}
      </Routes>
    </div>
  );
}

export default App;
