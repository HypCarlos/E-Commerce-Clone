
import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
     <ProductList/>
     <Footer/>
    </div>
  );
}

export default App;
