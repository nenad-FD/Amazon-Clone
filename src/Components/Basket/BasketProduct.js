import React from "react";
import "./BasketProduct.css";
import { AiOutlineStar } from "react-icons/ai";
import { useStateValue } from "../State/StateProvider";

function BasketProduct({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basket__product" key={id}>
      <img
        alt="basketProduct__img"
        src={image}
        className="basketProduct__img"
      />
      <div className="basketProduct__info">
        <p className="basketProductInfo__title">{title}</p>
        <p className="basketProductInfo__price">
          $<span className="basketProductInfo__number">{price}</span>
        </p>
        <div className="basketProductInfo__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <AiOutlineStar className="product__ratingStar" />;
            })}
        </div>
        <button className="basketProduct__btn" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketProduct;
