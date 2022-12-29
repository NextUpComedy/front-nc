import { Link } from 'react-router-dom';
import { Logo } from 'shared/components';
import './style.css';

function Header() {
  return (
    <div className="container">
      <div>
        <nav className="landing-navbar  navbar-expand-lg navbar-dark fixed-top">
          <div className="logolanding flex">
            <Link to="/login">
              <Logo className="" />
            </Link>
          </div>
          <div className="signin flex">
            <Link to="/login">
              <button type="button" className="btn btn-primary">
                Sign In
              </button>
            </Link>
          </div>
        </nav>

        <div className="main-text flex">
          <div className="sec-1">
            <p>WATCH LIVE COMEDY</p>
            <p>from your sofa</p>
          </div>
          <div className="flex">
            <Link to="/signup">
              <button type="button" className="btn-get-started">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
