import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Productos.css';

function Productos() {
  const { idCategoria } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = 'https://dummyjson.com/products';
    if (idCategoria) {
      url = `https://dummyjson.com/products/category/${idCategoria}`;
    }
    axios.get(url)
      .then(response => {
        setProducts(response.data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [idCategoria]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <section className="productos">
      <h1>Productos {idCategoria ? `- ${idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)}` : ''}</h1>
      {products.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-card">
              <Link to={`/producto/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Productos;
