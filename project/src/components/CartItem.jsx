import { useCart } from '../contexts/CartContext';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.image_url}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 border rounded"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 border rounded"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem