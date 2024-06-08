import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Form from "./components/Form";
import Addcart from "./components/Addcart";
import Standart from "./Payment/Standart";
import Terms from "./features/TermsConditions";
import Refund from "./features/Refund";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/form" element={<Form />} />
            <Route path="/addcart" element={<Addcart />} />
            <Route path="/pay" element={<Standart />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/term" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<Aboutus />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
