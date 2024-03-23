/*import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
};
export default App;*/


import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MyProvider } from "../src/my_context"; // Import MyProvider
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <MyProvider> {/* Wrap your routes with MyProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </MyProvider>
    </div>
  );
};

export default App;