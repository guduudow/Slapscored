import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <ul className="footer-menu">
            <li className="footer-text-logo">SLAPSCORED</li>
            <li className="footer-text">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-text">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
