import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductoDetalle.css';

function ProductoDetalle() {
  const { idProducto } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://dummyjson.com/products/${idProducto}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product details:', err);
        setLoading(false);
      });
  }, [idProducto]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <section className="producto-detalle">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      {product.images && product.images.length > 0 && (
        <div className="product-images-gallery">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={`${product.title} ${index + 1}`} className="gallery-image" />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductoDetalle;
