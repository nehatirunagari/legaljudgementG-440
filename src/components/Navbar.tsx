import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useDocument } from '../contexts/DocumentContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { hasUploadedDocument } = useDocument();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Scale size={24} />
          Legal AI
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
            >
              About Us
            </Link>
          </li>
          
          <li>
            <Link 
              to="/upload" 
              className={isActive('/upload') ? 'active' : ''}
            >
              {hasUploadedDocument ? 'Document Analysis' : 'Upload'}
            </Link>
          </li>
          
          <li>
            {user ? (
              <button 
                onClick={handleLogout}
                className="btn btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login" 
                className={isActive('/login') ? 'active' : ''}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;