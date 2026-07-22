import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { getGlobalContext } from './context';

const CartItem = ({ id, img, title, price, amount }) => {
  const {increaseCount,decreaseCount} = getGlobalContext()

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => console.log('remove')}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => {increaseCount(id)}}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => {decreaseCount(id)}}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
