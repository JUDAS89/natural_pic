import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MyProvider } from "../src/my_context"; 
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <MyProvider> 
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