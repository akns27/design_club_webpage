import './blogPost.css';
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import PageChangeDim from "../../components/PageChangeDim";

function BlogPost({ id, blog }){
  const [isDimmed, setIsDimmed] = useState(false);

  const toggleDim = () => {
    setIsDimmed(!isDimmed);
  };

  useEffect(() => {
    if (isDimmed) {
      //딤 화면이 나오면 스크롤 안되게하기
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; //클린업 함수
    };
  }, [isDimmed]); //의존성 배열

  return (
    <div id="blogpost">
      <PageChangeDim isDimmed={isDimmed} toggleDim={toggleDim} />
      <div onClick={toggleDim} className="floating_btn">
        <img
          src="https://raw.githubusercontent.com/akns27/EssetStorage/d3e4f6bd45b6338945152b0036bcfa56b82b18ea/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%90%E1%85%B5%E1%86%BC%20%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg"
          alt="플로팅 버튼"
          style={{ paddingTop: "3rem" }}
        />
      </div>
      <div className="blogpost_container">
        <div className="blogpost_header">
          <div className="blogpost_caption">Log</div>
          <div className="blogpost_title">
            {blog.title}
          </div>
          <div className="blogpost_caption">Writer : {blog.writer}</div>
        </div>
        <div className="texts-container">
          <div className="texts">
            {blog.contents}
          </div>
        </div>
      </div>
      <div className="blog_footer">
        <Footer />
      </div>
    </div>
  );
}

export default BlogPost;
