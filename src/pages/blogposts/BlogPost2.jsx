import { useState, useEffect } from "react";
import "../../style.css";
import Footer from "../../components/Footer";
import PageChangeDim from "../../components/PageChangeDim";

function BlogPost2() {
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
          <div className="blogpost_title">반가워 새 동아리장이야</div>
          <div className="blogpost_caption">Writer : 박강원</div>
        </div>
        <div className="texts-container">
          <div className="texts">
            2023년 말 “내년 동아리 장은 누가할래?” 라는 디자인 선생님의 말에
            나는 기대와 떨림을 멈출 수 없었다. 이리도 짧은 말이 나의 마음 속
            도화선에 불을 지피게된 것은 이미 예견되어있던 것일지도 모른다.
            2023년, 1학년 때 들어가고 싶은 동아리를 골라라했을 때 나는 한치의
            망설임도 없이 디자인 동아리를 들어가겠다며 손을 번쩍들었다. 그때
            나는 이미 디자인이라는 화려하고 무궁무진한 세계의 문을 열어버린
            상태였고, 그 속에서 만난 바다는 나를 잔잔하게 디자인의 세계로
            빠져들게했다. 이런 마음으로 들어가게 된 디자인 동아리의 첫 시간은
            참으로도 어색했다. 유독 내성적이었던 1학년 초 나는 낯선
            선배&친구들로 인해 긴장해서 첫 시간 어떤 활동을 했는지 기억에 남지도
            않는다. (그때 생각만 하면 지금도 떨린다.) 그 이후로 진행된 디자인
            동아리 시간은 나를 깊은 바다 속으로 빠져들게 했다.
            나는 결국 디자인 동아리의 부장이 되었다....
            다음에 이어서 계속
          </div>
        </div>
      </div>
      <div className="blog_footer">
        <Footer />
      </div>
    </div>
  );
}

export default BlogPost2;
