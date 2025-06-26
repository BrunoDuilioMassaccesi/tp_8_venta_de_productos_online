import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="main-layout">
      <header>
        <div className="logo">
          <img src="/vite.svg" alt="Logo" />
        </div>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
