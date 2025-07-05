import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">
          <Link to="/">AutoDon</Link>
        </h2>
      </div>
      <div className="navbar-right">
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
