import { NavLink } from 'react-router';
import NavbarWrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <span className="logo">Cocktail Master</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about-us" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/news-letter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
