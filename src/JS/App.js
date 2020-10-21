import React, { useEffect } from "react";
import "../CSS/App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import CSReader from './CSReader'
import Billing from "./Billing";
import Inventroy from "./Inventory";
import Analytics from "./Analytics";
import KhataBook from "./KhataBook";
import Newshop from "./Newshop";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        console.log(authUser?.uid);
        console.log(authUser);
        console.log(authUser?.email);

        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        //not logged in
        console.log("No user found");
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });

      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/signup">
            <Header />
            <Signup />
          </Route>

          <Route path="/profile">
            <Header />
            <Profile />
          </Route>

          <Route path="/sidebar">
            <Header />
            <div className="app__sidebar">
              <Sidebar />
              <Home />
            </div>
          </Route>

          <Route path="/Newshop">
            <Newshop />
          </Route>

          <Route path="/Billing">
            <Header />
            <Billing />
          </Route>

          <Route path="/Inventory">
            <Header />
            <Sidebar />
            <Inventroy />
          </Route>

          <Route path="/Analytics">
            <Header />
            <Sidebar />
            <Analytics />
          </Route>

          <Route path="/KhataBook">
            <Header />
            <Sidebar />
            <KhataBook />
          </Route>

          <Route path="/">
            <Header />
            <Sidebar />
            <Home />
            <CSReader/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
