import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//Icons
import { AiOutlineSearch } from "react-icons/ai";
import { MdShoppingBasket } from "react-icons/md";
//Components
import { useStateValue } from "../State/StateProvider";
import { auth } from "../Firebase/Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <header className="header">
      {/*Logo*/}
      <div className="header__logo">
        <Link to="/">
          <img
            alt="logo__img"
            className="header__img"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
      </div>
      {/*Input-Search*/}
      <div className="header__inputSearch">
        <input type="text" />
        <AiOutlineSearch className="header__searchIcon" />
      </div>
      {/*Navbar*/}
      <nav className="navbar__nav">
        <Link to={!user && "/login"}>
          <div onClick={login} className="nav__option">
            <span className="nav__optionLineOne">Hello {user?.email}</span>
            <span className="nav__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="nav__option">
          <span className="nav__optionLineOne">Returns</span>
          <span className="nav__optionLineTwo">& Orders</span>
        </div>
        <div className="nav__option">
          <span className="nav__optionLineOne">Your</span>
          <span className="nav__optionLineTwo">Prime</span>
        </div>
        <Link to="/basket">
          <div className="nav__shoppingBasket">
            <MdShoppingBasket className="nav__basket" />
            <span className="nav__basketCounter">{basket?.length}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
