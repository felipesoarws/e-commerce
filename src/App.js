import "./styles/main.css";
import Cards from "./components/cards";

import { useRef } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

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
