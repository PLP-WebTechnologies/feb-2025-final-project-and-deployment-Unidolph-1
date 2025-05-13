import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Cart() {
  const { cartItems, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please login to view your cart</h2>
          <button
            onClick={() => navigate('/login')}
            className="bg-black text-white px-6 py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          Your cart is empty
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl">${total.toFixed(2)}</span>
            </div>
            <button
              className="mt-4 w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart