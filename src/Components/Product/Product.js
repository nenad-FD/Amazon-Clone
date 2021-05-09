import React from "react";
import "./Product.css";
import { AiOutlineStar } from "react-icons/ai";
//State
import { useStateValue } from "../State/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product" key={id}>
      {/*Product info*/}
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          $<span className="product__priceNumber">{price}</span>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <AiOutlineStar className="product__ratingStar" />;
            })}
        </div>
      </div>
      {/*Product image*/}
      <img src={image} alt="product__img" className="product__img" />
      {/*btn*/}
      <button onClick={addToBasket} className="product__btn">
        Add to the basket
      </button>
    </div>
  );
}

export default Product;
