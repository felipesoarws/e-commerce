// shoes

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
                <button onClick={addToCart} className="btn">
                  add to cart
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </article>
  );
}

export default Cards;
