import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}

export default Navigation;
