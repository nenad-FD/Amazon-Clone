import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Basket from "./Components/Basket/Basket";
import Login from "./Components/Login/Login";
//State
import { useStateValue } from "./Components/State/StateProvider";
import { auth } from "./Components/Firebase/Firebase";



function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else{
        //the user is logged out...
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    });

    return () => {
      //Any cllean up operation goes in here...
      unsubscribe();
    }

  }, []);
  console.log("USER IS >>", user);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/basket">
            <Header />
            <Basket />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
