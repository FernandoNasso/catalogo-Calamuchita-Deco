import './App.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  const products = [
    { id: 1, name: '125 ambar', cantPack: 42, price: 100, imageUrl: "../../assets/125_AMBAR.jpeg" },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'assets/PETACA.png' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="app">
      <h1> Product Catalog</h1>
      <ProductList products={products} />
    </div>
  
  )
}

export default App
