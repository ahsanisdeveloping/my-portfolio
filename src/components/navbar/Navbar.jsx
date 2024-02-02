import { Link } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "../../router/Routes";
import '../../styles/navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogoDiv">
        <h1 className="navbarLogoText">Ahsan</h1>
      </div>
      <ul className="navbarUl">
        <li>
          <Link className="link" to={HOME}>Home</Link>
        </li>
        <li>
          <Link className="link" to={ABOUT}>About</Link>
        </li>
        <li>
        <Link className="link" to={SKILLS}>Skills</Link>
        </li>
        <li>
          <Link className="link" to={PROJECTS}>Projects</Link>
        </li>
        <li>
          <Link className="link" to={CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
