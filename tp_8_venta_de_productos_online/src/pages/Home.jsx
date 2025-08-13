import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenidos a Mi Tienda De Productos Online</h1>
          <p>Encuentra los mejores productos al mejor precio, con calidad y envío rápido.</p>
          <Link to="/productos" className="btn-primary">Ver Productos</Link>
        </div>

      </section>

      <section className="categories">
        <h2>Categorías Destacadas</h2>
        <div className="category-list">
          <Link to="/productos/laptops" className="category-card">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Laptops" />
            <h3>Laptops</h3>
          </Link>
          <Link to="/productos/smartphones" className="category-card">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" alt="Smartphones" />
            <h3>Smartphones</h3>
          </Link>
          <Link to="/productos/furniture" className="category-card">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80" alt="Furniture" />
            <h3>Muebles</h3>
          </Link>
        </div>
      </section>

      <section className="benefits">
        <h2>¿Por qué comprar con nosotros?</h2>
        <ul>
          <li>✔️ Productos de alta calidad</li>
          <li>✔️ Envío rápido y seguro</li>
          <li>✔️ Atención al cliente 24/7</li>
          <li>✔️ Garantía de satisfacción</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <blockquote>
          "Excelente servicio y productos de calidad. ¡Recomendado!"
          <footer>- Juan Pérez</footer>
        </blockquote>
        <blockquote>
          "La entrega fue rápida y el producto llegó en perfectas condiciones."
          <footer>- María Gómez</footer>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
