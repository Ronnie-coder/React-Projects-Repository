import "./portfolioList.scss";

/**
 * PortfolioList component for displaying and selecting portfolio categories.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the category
 * @param {string} props.id - The unique identifier for the category
 * @param {boolean} props.active - Whether the category is currently active
 * @param {Function} props.setSelected - Function to set the selected category
 * @param {string|null} props.hovered - The id of the currently hovered category
 * @param {Function} props.setHovered - Function to set the hovered category
 * @param {string} props.img - The source URL for the category icon
 * @returns {JSX.Element} The PortfolioList item
 */
export default function PortfolioList({ title, id, active, setSelected, hovered, setHovered, img }) {
  // Handler for selecting the category
  const handleSelect = () => setSelected(id);

  // Handler for hovering over the category
  const handleHover = (isHovered) => isHovered ? setHovered(id) : setHovered(null);

  return (
    <button
      className={`portfolioList ${active ? "active" : ""} ${hovered === id ? "hovered" : ""}`}
      id={id}
      onClick={handleSelect}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onFocus={() => handleHover(true)}
      onBlur={() => handleHover(false)}
      tabIndex={0}
      aria-label={`Select ${title} category`}
      aria-pressed={active}
    >
      <img src={img} alt={title} />
      <span>{title}</span>
    </button>
  );
}