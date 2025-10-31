import { useState, useMemo } from 'react';
import './Product.css';
import ProductList from './ProductList';

export default function Product() {
  const [products] = useState([
    { id: 1, name: 'VR Headset Pro', category: 'Hardware' },
    { id: 2, name: 'Immersive Learning Suite', category: 'Software' },
    { id: 3, name: 'AR Toolkit', category: 'Software' },
    { id: 4, name: '360 Camera', category: 'Hardware' },
  ]);

  // Single state for live query
  const [query, setQuery] = useState('');

  // Recompute on each keystroke; empty query returns all
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(p =>
      [p.name, p.category].some(v => String(v).toLowerCase().includes(q))
    );
  }, [products, query]);

  return (
    <div className="product-page">
      <h1 className="product-title">Products</h1>

      <div className="product-search">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="product-search-input"
        />
      </div>

      <ProductList items={filtered} />
    </div>
  );
}