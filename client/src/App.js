import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* login registration routes  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* frontend all routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Cart />} />

          {/* backend all routes start  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
