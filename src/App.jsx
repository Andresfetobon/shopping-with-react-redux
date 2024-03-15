import { useSelector } from 'react-redux';
import FormProduct from './components/FormProduct';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const { cart } = useSelector(states => states);

  console.log(cart);
  return (
    <div>
      <h1>Redux 2</h1>
      <FormProduct />
      <div>
        {cart.map(product => (
          <ProductCard 
          key={product.bar_code} 
          product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
