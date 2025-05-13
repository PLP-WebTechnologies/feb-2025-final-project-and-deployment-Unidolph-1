import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              Fashion Store
            </Link>
            <div className="ml-10 space-x-8">
              <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                Shop
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            {user ? (
              <button
                onClick={signOut}
                className="text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar