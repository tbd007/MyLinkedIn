import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";

function App() {
  return (
    <div className="app">
     
      <Header/>
      {/*AppBody*/}
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Profile/>
      </div>
       
      
    </div>
  );
}

export default App;
