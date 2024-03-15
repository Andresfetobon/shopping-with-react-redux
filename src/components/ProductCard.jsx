/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteProductG } from '../../store/slices/cart.slice';

const ProductCard = ({ product }) => {
  const dispath = useDispatch();

  const handleDelete = () => {
    dispath(deleteProductG(product.bar_code));
  };

  return (
    <article>
      <h3>{product.name}</h3>
      <ul>
        <li>
          <span>Bar Code: </span>
          {product.bar_code}
        </li>
        <li>
          <span>Expiration Date: </span>
          {product.expo_date}
        </li>
        <li>
          <span>Price: $</span>
          {product.price} USD
        </li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default ProductCard;
