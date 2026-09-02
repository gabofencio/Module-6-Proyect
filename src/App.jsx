import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Studies from "./components/studies";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/estudios" element={<Studies />} />
      </Routes>
    </Layout>
  );
}

export default App;