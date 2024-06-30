import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function BlogThumbnail({ image, date, title, url }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <div className="blogthumbnail_container" onClick={handleClick}>
      <div className="thumbnail_image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="thumbnail_text_container">
        <div className="date">{date}</div>
        <div className="blog_title">{title}</div>
      </div>
    </div>
  );
}

export default BlogThumbnail;