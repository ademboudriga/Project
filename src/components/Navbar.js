import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleNavbar.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { faCartShopping, fauUer, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/Home" className="navbar-brand">
          <img src="https://th.bing.com/th/id/OIP.Ayze13hPAPpPV40No4evMgAAAA?w=184&h=122&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <Dropdown as="li" className="nav-item">
          <Dropdown.Toggle as={Link} to="#" id="navbarDropdown" role="button" className="nav-link dropdown-toggle">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu aria-labelledby="navbarDropdown">
            <Dropdown.Item as={Link} to="/SeedStock">Seed stock</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Merch">Merch</Dropdown.Item>
            <Dropdown.Item as={Link} to="/Cuttings">Cuttings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact us
              </Link>
            </li>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search for a product" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <li className="nav-item">
              <Link to="/community" className="nav-link">
              <FontAwesomeIcon icon={faUser} style={{ color: "green" }} />Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart" className="nav-link">
              <FontAwesomeIcon icon={faCartShopping} style={{ color: "green" }} />Cart
              </Link>
            </li></ul>
        </div>
      </div>
    </nav>
  );
}
