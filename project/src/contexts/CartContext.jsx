import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadCartItems();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const loadCartItems = async () => {
    const { data, error } = await supabase
      .from('cart_items')
      .select('*, products(*)')
      .eq('user_id', user.id);

    if (!error) {
      setCartItems(data);
    }
  };

  const addToCart = async (product) => {
    if (!user) return;

    const { data, error } = await supabase
      .from('cart_items')
      .insert({
        user_id: user.id,
        product_id: product.id,
        quantity: 1
      })
      .select('*, products(*)')
      .single();

    if (!error) {
      setCartItems([...cartItems, data]);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }

    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', itemId)
      .select('*, products(*)')
      .single();

    if (!error) {
      setCartItems(cartItems.map(item => 
        item.id === itemId ? data : item
      ));
    }
  };

  const removeFromCart = async (itemId) => {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', itemId);

    if (!error) {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    }
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      updateQuantity, 
      removeFromCart,
      total: cartItems.reduce((sum, item) => sum + item.quantity * item.products.price, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};