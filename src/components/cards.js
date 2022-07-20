// shoes
import AirMax from "../images/airmaxplus.png";
import AirJordan from "../images/airjordan.png";
import AirMaxOffWhite from "../images/airmaxoffwhite.png";
import AirMax90 from "../images/airmax90.png";
import AdidasNmd from "../images/adidasnmd.png";
import Balenciaga from "../images/balenciaga.png";
import { useEffect, useState } from "react";

function addToCart(el) {
  let card = el.nativeEvent.path[2];
  let bttn = card.querySelector("button");
  bttn.innerHTML = "done!";

  setTimeout(function () {
    bttn.innerHTML = "add to cart";
  }, 2000);
}

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/felipesoarws/e-commerce/main/src/components/shoes.json"
    )
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;
  return (
    <article className="cards">
      {data.map((shoe) => {
        const { id, color, price, name, image } = shoe;
        return (
          <section className={color} key={id}>
            <div className="card">
              <div className="f-line">
                <div className="price">
                  <h2>${price}</h2>
                  <small>{name}</small>
                </div>
              </div>
              <div>
                <img src={image} alt="shoe" className="shoe" />
                <button onClick={addToCart}>add to cart</button>
              </div>
            </div>
          </section>
        );
      })}
    </article>
  );
}

export default Cards;
