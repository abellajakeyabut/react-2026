import CartItem from './CartItem';
import { getGlobalContext } from './context';

const CartContainer = () => {
  const { cart, loading,clearCart } = getGlobalContext();
  if(cart.size<1){
    
     return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {[...cart.values()].map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$10</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => clearCart()}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
