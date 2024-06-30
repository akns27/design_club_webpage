import { useNavigate } from 'react-router-dom';
import "../style.css";

function PageChangeDim({ isDimmed, toggleDim }) {
  const navigate = useNavigate();

  if (!isDimmed) return null;

  const handleNavigation = (path) => {
    toggleDim();
    navigate(path);
  };

  return (
    <div className="dim_container">
      <div className="dim_title" onClick={() => handleNavigation('/about')}>About us</div>
      <div className="dim_title" onClick={() => handleNavigation('/blog')}>Blog</div>
    </div>
  );
}

export default PageChangeDim;