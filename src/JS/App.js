import React from "react";
import "../CSS/App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import CSReader from './CSReader'

function App() {
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

          <Route path="/">
            <Header />
            <Home />
            <CSReader/>
          </Route>
          </Switch>
          </div>
          </BrowserRouter>
  );
}
export default App;