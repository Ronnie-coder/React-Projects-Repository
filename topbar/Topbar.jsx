import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // This div gets the 'active' class when menu is open
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* Logo with subtle hover effect */}
          <a href="#intro" className="logo" aria-label="CodeRon">
            CodeRon.
          </a>
          
          {/* Phone link with custom hover underline */}
          <a 
            href="tel:+27678184898" 
            className="itemContainer" 
            aria-label="Phone number"
          >
            <Person className="icon" />
            <span>+27 67 818 4898</span>
          </a>
          
          {/* Email link with custom hover underline */}
          <a 
            href="mailto:CodeRon@zohair.com" 
            className="itemContainer" 
            aria-label="Email address"
          >
            <Mail className="icon" />
            <span>CodeRon@zohair.com</span>
          </a>
        </div>

        <div className="right">
          {/* Hamburger button with animated lines */}
          <button 
            className="hamburger" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
        </div>
      </div>
    </div>
  );
}