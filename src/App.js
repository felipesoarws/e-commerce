import "./styles/main.css";
import Cards from "./components/cards";

import { useRef } from "react";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import { BiShoppingBag } from "react-icons/bi";

function App() {
  let carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    let offsetwidth = carousel.current.children[0].offsetWidth;

    carousel.current.children[0].scrollLeft -= offsetwidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    let offsetwidth = carousel.current.children[0].offsetWidth;
    carousel.current.children[0].scrollLeft += offsetwidth;
  };

  return (
    <div className="App">
      <header>
        <div className="mobile">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiOutlineInstagram />
          <BiShoppingBag />
          <small>1</small>
        </div>

        <div className="desktop">
          <div className="lines">
            <div className="f-line">
              <AiFillGithub />
              <AiFillLinkedin />
              <AiOutlineInstagram />
            </div>
            <div className="s-line">
              <BiShoppingBag />
              <small>1</small>
            </div>
          </div>
        </div>
      </header>
      <div className="container" ref={carousel}>
        <Cards />
      </div>
      <div className="arrows">
        <AiOutlineCaretLeft className="left" onClick={handleLeftClick} />
        <AiOutlineCaretRight className="right" onClick={handleRightClick} />
      </div>
    </div>
  );
}

export default App;
