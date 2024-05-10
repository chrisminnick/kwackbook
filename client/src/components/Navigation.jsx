import { Link } from 'react-router-dom';

function Navigation() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    backgroundColor: '#ffffb3',
    marginTop: '20px',
    padding: '10px',
  };
  return (
    <ul style={navStyle}>
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
