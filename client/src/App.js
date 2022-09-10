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
import { useRoutes } from "react-router-dom";
import Themeroutes from "./dashbaord/routes/Router";
import FullLayout from "./dashbaord/layouts/FullLayout";
import Tables from "./dashbaord/views/ui/Tables";
import Starter from "./dashbaord/views/Starter";
// import Dashboard from "./dashbaord";

function App() {
  // const routing = useRoutes(Themeroutes);

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
        {/* <div className="dark">{routing}</div> */}

        <Route path="/dashboard" element={<FullLayout />} >
        <Route index element={<Starter />} />

        </Route>


        


        {/* backend all routes start  */}
      </Routes>
    </div>
  );
}

export default App;
