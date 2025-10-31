export default function ProductList({ items }) {
    if (!items.length) {
      return <p className="product-empty">No products found.</p>;
    }
  
    return (
      <ul className="product-list">
        {items.map(item => (
          <li key={item.id} className="product-item">
            <span className="product-name">{item.name}</span>
            <span className="product-category">{item.category}</span>
          </li>
        ))}
      </ul>
    );
  }