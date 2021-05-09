import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_baner"
        alt="baner__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__productsRow">
        <Product
          id="123324653"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="926748656"
          title="The Lean Startup: How Constant Innovation Creates"
          price={8.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_05_3362887_440x440_en_US.jpg"
        />
      </div>
      <div className="home__productsRow">
        <Product
          id="245455678"
          title="The Lean Startup: How Constant Innovation Creates"
          price={1150.0}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCSkX8olkJ9hxqtYEZKsNyM7AbXgzXiYY0Q&usqp=CAU"
        />
        <Product
          id="989768112"
          title="The Lean Startup: How Constant Innovation Creates"
          price={21.99}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzk-U7yGfaJWy5X3ObyVipVtgtmL-p96_7w&usqp=CAU"
        />
        <Product
          id="118790648"
          title="The Lean Startup: How Constant Innovation Creates"
          price={23.99}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNOBUzbowGjxxMe3rZ7r8fjVkzmRlTZ5Lyg&usqp=CAU"
        />
      </div>
      <div className="home__productsRow">
        <Product
          id="657834544"
          title="The Lean Startup: How Constant Innovation Creates"
          price={149.99}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGEFJmxcsx8PFVkJKZ8K-5o0IKNSHctl69Q&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
