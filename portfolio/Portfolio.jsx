import { useEffect, useState, useMemo, useRef } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
  blogsPortfolio,
} from "../../data";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensure proper focus management for accessibility

export default function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selected, setSelected] = useState("featured");
  const [hovered, setHovered] = useState(null);
  
  const portfolioCategories = [
    { id: "featured", title: "Featured", img: featuredPortfolio[0]?.img },
    { id: "web", title: "Web Apps", img: webPortfolio[0]?.img },
    { id: "design", title: "Design", img: designPortfolio[0]?.img },
    { id: "blogs", title: "Blogs", img: blogsPortfolio[0]?.img }
  ];

  const modalContentRef = useRef(null);

  useEffect(() => {
    if (modalIsOpen && modalContentRef.current) {
      modalContentRef.current.focus();
    }
  }, [modalIsOpen]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const handleCategoryChange = (id) => {
    setSelected(id);
  };

  const data = useMemo(() => {
    switch (selected) {
      case "featured":
        return featuredPortfolio;
      case "web":
        return webPortfolio;
      case "design":
        return designPortfolio;
      case "blogs":
        return blogsPortfolio;
      default:
        return featuredPortfolio;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <nav role="navigation" className="category-container">
        {portfolioCategories.map((category) => (
          <PortfolioList
            key={category.id}
            id={category.id}
            title={category.title}
            active={selected === category.id}
            setSelected={handleCategoryChange}
            hovered={hovered === category.id}
            setHovered={setHovered}
            img={category.img}
            aria-current={selected === category.id ? "page" : undefined}
          />
        ))}
      </nav>
      <div className="container">
        {/* ... (your existing loading and error states) */}
        <div className="portfolio-grid">
          {data.map((item) => (
            <div 
              className="item" 
              key={item.id}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleItemClick(item);
                }
              }}
            >
              <div className="image-container">
                <LazyLoadImage 
                  src={item.img} 
                  alt={item.title} 
                  effect="blur" 
                  className="portfolio-image"
                  style={{ transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="overlay" aria-hidden={!hovered}>
                  <h3>{item.title}</h3>
                  <button 
                    className="view-more" 
                    onClick={() => handleItemClick(item)}
                    tabIndex={0}
                    aria-label={`View more details about ${item.title}`}
                  >
                    View Project Image
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            transition: 'opacity 0.3s ease'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            border: `2px solid #3498db`,
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '80%',
            maxHeight: '80%',
            overflowY: 'auto',
            transition: 'transform 0.3s ease'
          }
        }}
      >
        {selectedItem ? (
          <div ref={modalContentRef} tabIndex="-1">
            <h2>{selectedItem.title}</h2>
            <LazyLoadImage 
              src={selectedItem.img} 
              alt={selectedItem.title} 
              style={{ maxWidth: '100%' }} 
              effect="blur"
              placeholder={
                <div className="modal-loading">
                  <div className="spinner"></div>
                  <h3>Loading image...</h3>
                </div>
              }
            />
            <p>{selectedItem.description}</p>
            {/* Add more details here */}
            <h3>Technologies Used:</h3>
            <ul>
              {selectedItem.technologies && selectedItem.technologies.map(tech => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {selectedItem.liveDemo && (
              <a href={selectedItem.liveDemo} target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            )}
            {selectedItem.github && (
              <a href={selectedItem.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
            <button 
              onClick={closeModal}
              style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="modal-loading">
            <div className="spinner"></div>
            <h3>Loading project details...</h3>
          </div>
        )}
      </Modal>
    </div>
  );
}