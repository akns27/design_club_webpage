import { useState, useEffect } from "react";
import "../../style.css";
import Footer from "../../components/Footer";
import PageChangeDim from "../../components/PageChangeDim";

function BlogPost3() {
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
    <div className="main_container">
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
            이번 생에 학교 굿즈 제작은 처음이라
          </div>
          <div className="blogpost_caption">Writer : 박강원</div>
        </div>
        <div className="texts-container">
          <div className="texts">
            글 테스트 2 (반가워 새 동아리장이야 글로 가세요)
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost3;
