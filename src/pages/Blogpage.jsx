import { useState, useEffect } from "react";
import "../style.css";
import Footer from "../components/Footer";
import PageChangeDim from "../components/PageChangeDim";
import BlogThumbnail from "../components/BlogThumbnail";

function Blogpage() {
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

  const blogData = [
    { image: "src/assets/필마이리듬1.jpeg", date: "2023.12~2024.08", title: "우리 학교를 대표할 브랜딩 & 굿즈 제작기 2탄", url: "/blog/1" },
    { image: "src/assets/20240607_201943.jpg", date: "2023.08", title: "반가워 새 동아리 장이야", url: "/blog/2" },
    { image: "src/assets/운학1.jpeg", date: "2023.06", title: " 이번 생에 학교 굿즈 제작은 처음이라", url: "/blog/3" },
    { image: "src/assets/베러띵즈1.jpeg", date: "2023.05", title: "처음 세개 빼고 글 안들어가져요 ㅎㅎ " },
    { image: "src/assets/베러띵즈2.jpeg", date: "2023.04", title: "#9"},
    { image: "src/assets/20240612_221614.jpg", date: "2023.03", title: "#8" },
    { image: "src/assets/아마겟돈2.jpeg", date: "2023.02", title: "#7" },
    { image: "src/assets/칠킬1.jpeg", date: "2023.01", title: "#6" },
    { image: "src/assets/니콜라스.jpeg", date: "2023.01", title: "#5" },
    { image: "src/assets/신유5.jpeg", date: "2023.01", title: "#4" },
    { image: "src/assets/칠킬2.jpeg", date: "2023.01", title: "#3" },
    { image: "src/assets/아마겟돈1.jpeg", date: "2023.01", title: "#2" },
    { image: "src/assets/칠킬3.jpeg", date: "2023.01", title: "#1" },
  ];

  return (
    <div className="main_container">
      <PageChangeDim isDimmed={isDimmed} toggleDim={toggleDim} />
      <div onClick={toggleDim} className="floating_btn">
        <img src="src/assets/플로팅 버튼.svg" alt="플로팅 버튼" style={{paddingTop: '3rem'}}/>
      </div>
      <div className="blog_container">
      {blogData.map((blog, index) => (
          <BlogThumbnail
            key={index}
            image={blog.image}
            date={blog.date}
            title={blog.title}
            url={blog.url}
          />
        ))}
      </div>
      <div className="content">
        <Footer />
      </div>
    </div>
  );
}

export default Blogpage;
