import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const handleLinkClick = (e) => {
    e.stopPropagation();
    setMenuOpen(false); // Close menu when link is clicked
  };

  return (
    <nav
      className={"menu " + (menuOpen && "active")}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <ul aria-hidden={!menuOpen}>
        <li>
          <a 
            href="#intro" 
            onClick={handleLinkClick}
            aria-label="Navigate to Home section"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            onClick={handleLinkClick}
            aria-label="Navigate to Portfolio section"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#works" 
            onClick={handleLinkClick}
            aria-label="Navigate to Works section"
          >
            Works
          </a>
        </li>
        <li>
          <a 
            href="#testimonials" 
            onClick={handleLinkClick}
            aria-label="Navigate to Testimonials section"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            aria-label="Navigate to Contact section"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}