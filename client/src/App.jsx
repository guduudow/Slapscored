import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/privacy" Component={Privacy} />
          {/* <Route path="/login" Component={Login} /> */}
          {/* <Route path="/register" Component={Register} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
