import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Form from "./components/Form";
import Addcart from "./components/Addcart";
import Progressbar from "./components/Progressbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Progressbar />
        <Routes>
          {/* <Route path="/" element={<Layout />}/> */}
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/form" element={<Form />} />
          <Route path="/addcart" element={<Addcart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
