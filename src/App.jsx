import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // example additional page
import Layout from "./components/Layout";
import "./index.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}
