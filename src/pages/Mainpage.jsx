import { useState, useEffect } from "react";
import Heropage from "./Heropage";
import "../style.css";
import Spritpage from "./Spritpage";
import Footer from "../components/Footer";
import PageChangeDim from "../components/PageChangeDim";

function Mainpage() {
  const [isDimmed, setIsDimmed] = useState(false);

  const toggleDim = () => {
    setIsDimmed(!isDimmed);
  };

  useEffect(() => {
    if (isDimmed) {//딤 화면이 나오면 스크롤 안되게하기
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';//클린업 함수
    };
  }, [isDimmed]);//의존성 배열

  return (
    <div className='main_container'>
      <PageChangeDim isDimmed={isDimmed} toggleDim={toggleDim} isLogin={false} />
      <div onClick={toggleDim} className="floating_btn">
        <img src="https://raw.githubusercontent.com/react-team-project-kangwon-ljhy/RTP-client/f0f8dbfbf6cad06d7fdaaff23f697e18fd6f85c9/public/%ED%94%8C%EB%A1%9C%ED%8C%85%20%EB%B2%84%ED%8A%BC.svg" alt="플로팅 버튼" />
      </div>
      <div className="content">
        <Heropage />
        <Spritpage />
        <Footer />
      </div>
    </div>
  );
}

export default Mainpage;