import React, { useEffect } from "react";
import "../CSS/App.css";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Billing from "./Billing";
import Inventroy from "./Inventory";
import Analytics from "./Analytics";
import KhataBook from "./KhataBook";
import Newshop from "./Newshop";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import Dashboard2 from "./Dashboard2.js";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
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
            <Sidebar />
            <Login />
          </Route>

          <Route path="/signup">
            <Sidebar />
            <Signup />
          </Route>

          <Route path="/profile">
            <Sidebar />
            <Profile />
          </Route>

          <Route path="/sidebar">
            <div className="app__sidebar">
              <Sidebar />
              <Home />
            </div>
          </Route>

          <Route path="/Newshop">
            <Newshop />
          </Route>

          <Route path="/Billing">
            <Sidebar />
            <Billing />
          </Route>

          <Route path="/Inventory">
            <Sidebar />
            <Inventroy />
          </Route>

          <Route path="/Analytics">
            <Sidebar />

            <Analytics />
          </Route>

          <Route path="/KhataBook">
            <Sidebar />
            <KhataBook />
          </Route>

          <Route path="/">
            <Sidebar />
            <Home />
            {/*<DisplayTable />*/}
            <Dashboard2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
