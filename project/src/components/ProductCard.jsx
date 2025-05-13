import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard