import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Watch from "./pages/Watch";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="watch" element={<Watch />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
