import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../services/ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getAllProducts().then((response) => {
      setProducts(response.data);
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      loadProducts();
    });
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      <Link to="/products/create" className="btn btn-primary mb-3">
        Create Product
      </Link>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.name} - Rs {product.price}
            <div>
              <Link to={`/products/edit/${product.id}`} className="btn btn-sm btn-outline-primary mx-1">
                Edit
              </Link>
              <button onClick={() => handleDelete(product.id)} className="btn btn-sm btn-outline-danger mx-1">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
