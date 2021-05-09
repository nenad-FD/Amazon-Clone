import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../State/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const calculateSubtotal = () => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>${calculateSubtotal()}</strong>
      </p>
      <small className="subtotal__checkbox">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
