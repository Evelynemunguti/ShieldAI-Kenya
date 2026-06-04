import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Detector from "./Pages/Detector";
import VerifyNumber from "./Pages/VerifyNumber";
import VerifyWebsite from "./Pages/VerifyWebsite";
import Academy from "./Pages/Academy";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detector" element={<Detector />} />
        <Route path="/verify-number" element={<VerifyNumber />} />
        <Route path="/verify-website" element={<VerifyWebsite />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;