import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/quienes-somos" className={({ isActive }) => isActive ? 'active' : ''}>Quienes somos</NavLink></li>
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropbtn">Productos</span>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>Ver todos</NavLink></li>
              {categories.map(category => (
                <li key={category.slug}>
                  <NavLink 
                    to={`/productos/${category.slug}`} 
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
