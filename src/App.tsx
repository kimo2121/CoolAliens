import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="banner"></div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
