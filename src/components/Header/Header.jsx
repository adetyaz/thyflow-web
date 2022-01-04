import Button from '../Button/Button';
import './Header.css'

const Header = () => {

  return (
    <header>
      <div className="logo-box">
        THYFLOW
      </div>
      <nav>
        <ul className="nav-items">
          <li>Services</li>
          <li>Contact</li>
          <li>Blog</li>
          <Button>
            join our beta crew
          </Button>
        </ul>
      </nav>
    </header>
  )
}

export default Header;