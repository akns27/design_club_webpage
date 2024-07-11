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
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%ED%95%84%EB%A7%88%EC%9D%B4%EB%A6%AC%EB%93%AC1.jpeg?raw=true", date: "2023.12~2024.08", title: "우리 학교를 대표할 브랜딩 & 굿즈 제작기 2탄", url: "/blog/1" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/20240607_201943.jpg?raw=true", date: "2023.08", title: "반가워 새 동아리 장이야", url: "/blog/2" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%9A%B4%ED%95%991.jpeg?raw=true", date: "2023.06", title: " 이번 생에 학교 굿즈 제작은 처음이라", url: "/blog/3" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EB%B2%A0%EB%9F%AC%EB%9D%B5%EC%A6%881.jpeg?raw=true", date: "2023.05", title: "처음 세개 빼고 글 안들어가져요 ㅎㅎ " },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EB%B2%A0%EB%9F%AC%EB%9D%B5%EC%A6%882.jpeg?raw=true", date: "2023.04", title: "#9"},
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/20240612_221614.jpg?raw=true", date: "2023.03", title: "#8" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%95%84%EB%A7%88%EA%B2%9F%EB%8F%882.jpeg?raw=true", date: "2023.02", title: "#7" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%B9%A0%ED%82%AC1.jpeg?raw=true", date: "2023.01", title: "#6" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EB%8B%88%EC%BD%9C%EB%9D%BC%EC%8A%A4.jpeg?raw=true", date: "2023.01", title: "#5" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%8B%A0%EC%9C%A05.jpeg?raw=true", date: "2023.01", title: "#4" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%B9%A0%ED%82%AC2.jpeg?raw=true", date: "2023.01", title: "#3" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%95%84%EB%A7%88%EA%B2%9F%EB%8F%881.jpeg?raw=true", date: "2023.01", title: "#2" },
    { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%B9%A0%ED%82%AC3.jpeg?raw=true", date: "2023.01", title: "#1" },
  ];

  return (
    <div className="main_container">
      <PageChangeDim isDimmed={isDimmed} toggleDim={toggleDim} isLogin={false} />
      <div onClick={toggleDim} className="floating_btn">
        <img src="https://raw.githubusercontent.com/react-team-project-kangwon-ljhy/RTP-client/f0f8dbfbf6cad06d7fdaaff23f697e18fd6f85c9/public/%ED%94%8C%EB%A1%9C%ED%8C%85%20%EB%B2%84%ED%8A%BC.svg" alt="플로팅 버튼" style={{paddingTop: '3rem'}}/>
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
      <div className="blog_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Blogpage;
