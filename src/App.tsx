import "./App.css";
import Header from "./components/Header";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import productImage from "./assets/web-dev.png";
import { Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header title="Web Courses" />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <Product
              title="Web Development Masterclass: From Beginner to Pro"
              description="Join our 'Front-End Web Development Essentials' course to dive into the world of web development. Learn HTML, CSS, and JavaScript from scratch and gain the skills needed to create visually appealing and interactive websites."
              images={[{ src: productImage, alt: "Course Hero Illustration" }]}
              price={25.99}
            />
          }
        />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
