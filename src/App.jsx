import { useSelector } from 'react-redux';
import FormProduct from './components/FormProduct';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const { cart } = useSelector(states => states);
  return (
    <div>
      <div className='text-header'>
        <h1>Order lists</h1>
      </div>
      <FormProduct />
      <div>
        {cart.map(product => (
          <ProductCard key={product.bar_code} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
