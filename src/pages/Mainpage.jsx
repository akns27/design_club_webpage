import Heropage from "./Heropage";
import "../style.css";
import Spritpage from "./Spritpage";
import Footer from "../components/Footer";

function Mainpage() {
  return (
    <div className="main_container">
      <div className="floating_btn">
        <img src="src/assets/플로팅 버튼.svg"></img>
      </div>
      <Heropage />
      <Spritpage />
      <Footer />
    </div>
  );
}

export default Mainpage;
