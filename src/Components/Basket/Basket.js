import React from "react";
import "./Basket.css";
//Components
import BasketProduct from "./BasketProduct";
import Subtotal from "../Subtotal/Subtotal";
//State
import { useStateValue } from "../State/StateProvider";

function Basket() {
  const [{ basket }] = useStateValue();
  return (
    <div className="basket">
      <main className="basket__main">
        <img
          className="basket__ads"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        {basket?.length > 0 ? (
          <div className="basket__products">
            <h2 className="basket__title line">Your Shopping Basket</h2>
            {basket?.map((item) => {
              return (
                <BasketProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className="basket__title">Your Shopping Basket is empty </h2>
            <p className="basket__text">
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        )}
      </main>
      <aside className="basket__subtotal">
        {basket?.length > 0 && <Subtotal />}
      </aside>
    </div>
  );
}

export default Basket;
