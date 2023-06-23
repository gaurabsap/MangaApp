import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Info from "./pages/info/Info";
import Image from "./pages/mangapage/Image";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mangainfo" element={<Info />} />
          <Route path="/read" element={<Image />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
