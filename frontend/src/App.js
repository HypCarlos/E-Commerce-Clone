import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path= "/Cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
