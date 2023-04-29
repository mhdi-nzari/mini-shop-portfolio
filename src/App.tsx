import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";

import {Container} from 'react-bootstrap'
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
    <NavBar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Store/>}/>
        <Route path="/store" index element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
