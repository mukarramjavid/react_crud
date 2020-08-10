import React from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import AddUser from "./Components/users/AddUser";
import EditUser from "./Components/users/EditUser";
import ViewUser from "./Components/users/ViewUser";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/:id" component={ViewUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
