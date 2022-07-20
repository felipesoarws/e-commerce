// shoes
import AirMax from "../images/airmaxplus.png";
import AirJordan from "../images/airjordan.png";
import AirMaxOffWhite from "../images/airmaxoffwhite.png";
import AirMax90 from "../images/airmax90.png";
import AdidasNmd from "../images/adidasnmd.png";
import Balenciaga from "../images/balenciaga.png";

import Card from "./card";

function Cards() {
  return (
    <article className="cards">
      <Card img={AirMax} price="99$" title="Nike Air Max 95 " class="blue" />
      <Card
        img={AirJordan}
        price="120$"
        title="Nike Air Jordan 1 "
        class="red"
      />
      <Card
        img={AirMaxOffWhite}
        price="130$"
        title="Nike Air Max Off-White"
        class="bege"
      />
      <Card img={Balenciaga} price="150$" title="Balenciaga" class="black" />
      <Card img={AdidasNmd} price="105$" title="Adidas NMD R1" class="gray" />
      <Card
        img={AirMax90}
        price="125$"
        title="Nike Air Max 90 White"
        class="white"
      />
    </article>
  );
}

export default Cards;
