import './App.css';
import ProductList from './components/ProductList/ProductList';
import image125Ambar from '../src/assets/125_AMBAR.jpeg';
import imagePetaca from '../src/assets/PETACA.png';

function App() {
  const products = [
    { id: 1, name: '125 ambar', cantPack: 42, price: 100, imageUrl: image125Ambar },
    { id: 2, name: 'Product 2', price: 30, imageUrl: imagePetaca },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="app">
      <h1> Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;

