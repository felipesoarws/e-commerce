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
  let user = document.getElementById("user");

  console.log(Cards);

  const handleLeftClick = (e) => {
    e.preventDefault();

    let offsetwidth = carousel.current.children[0].offsetWidth;

    carousel.current.children[0].scrollLeft -= offsetwidth;

    user.style.color = "rgb(56, 69, 255)";
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    let offsetwidth = carousel.current.children[0].offsetWidth;
    carousel.current.children[0].scrollLeft += offsetwidth;

    user.style.color = "#b31225";
  };

  return (
    <div className="App">
      <header>
        <div className="mobile">
          <a href="https://github.com/felipesoarws" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/felipesoarws/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/felipesoarws/" target="blank">
            <AiOutlineInstagram />
          </a>
          <BiShoppingBag />
          <small>5</small>
        </div>

        <div className="desktop">
          <div className="lines">
            <div className="f-line">
              <a href="https://github.com/felipesoarws" target="blank">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/felipesoarws/"
                target="blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com/felipesoarws/" target="blank">
                <AiOutlineInstagram />
              </a>
            </div>
            <div className="me">
              <p>
                coded by <span id="user">@felipesoarws</span>
              </p>
            </div>
            <div className="s-line">
              <BiShoppingBag />
              <small>5</small>
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
