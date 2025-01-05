
import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import UserName from "./components/UserName";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Mainpage from "./components/Mainpage";
import Submit from "./components/Sumbit";
import CreateAccount from "./components/CreateAccount";
function App(){
  return(
      <Router>
        <div className="App">
          <header>
            <main>
                <Routes>
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path = "/mainpage" element = {<Mainpage/>}/>
                    <Route path = "/submit" element = {<Submit/>}/>
                    <Route path = "/createuser" element = {<CreateAccount/>}/>
                </Routes>
                <NavBar />
            </main>
          </header>

        </div>

      </Router>


);
}
export default App;