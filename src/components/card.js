import Shoes from "./shoes";
import { useState } from "react";

function addToCart(el) {
  let card = el.nativeEvent.path[2];
  let bttn = card.querySelector("button");
  bttn.innerHTML = "done!";

  setTimeout(function () {
    bttn.innerHTML = "add to cart";
  }, 2000);
}

function Card() {
  const [data, setData] = useState([]);

  if (!data || !data.length) return null;

  Shoes.map((shoe) => {
    return (
      <section className={shoe.class}>
        <div className="card">
          <div className="f-line">
            <div className="price">
              <h2>{shoe.price}</h2>
              <small>{shoe.name}</small>
            </div>
          </div>
          <div>
            <img src={shoe.image} alt="shoe" className="shoe" />
            <button onClick={addToCart}>add to cart</button>
          </div>
        </div>
      </section>
    );
  });
}

export default Card;
