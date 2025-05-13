import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    loadProducts();
  }, [category]);

  const loadProducts = async () => {
    let query = supabase.from('products').select('*');
    
    if (category !== 'all') {
      query = query.eq('category', category);
    }

    const { data } = await query;
    setProducts(data || []);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              category === 'all' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCategory('women')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'women' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            Women
          </button>
          <button
            onClick={() => setCategory('children')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              category === 'children' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            Children
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop