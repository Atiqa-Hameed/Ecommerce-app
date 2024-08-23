import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md"/>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-xl font-bold text-gray-900">${item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemove(item.id)} 
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 py-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-bold text-gray-900">Total Price:</p>
                <p className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handleClearCart} 
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-red-600 flex-1"
                >
                  Clear Cart
                </button>
                <Link to="/PlaceOrder" className="flex-1">
                  <button 
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-green-600"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
