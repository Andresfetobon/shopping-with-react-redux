/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteProductG } from '../../store/slices/cart.slice';
import { setUpdateInfoG } from '../../store/slices/updateInfo.slice';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const dispath = useDispatch();

  const handleDelete = () => {
    dispath(deleteProductG(product.bar_code));
  };

  const handleEdit = () => {
    dispath(setUpdateInfoG(product));
  };

  return (
    <article className='card'>
      <h3>{product.name}</h3>
      <ul className='info-order'>
        <li>
          <b>Bar Code: </b>
          {product.bar_code}
        </li>
        <li>
          <b>Expiration Date: </b>
          {product.expo_date}
        </li>
        <li>
          <b>Price: $</b>
          {product.price} USD
        </li>
      </ul>
      <button className='Button-1' onClick={handleDelete}>
        Delete
      </button>
      <button className='Button-2' onClick={handleEdit}>
        Edit
      </button>
    </article>
  );
};

export default ProductCard;
