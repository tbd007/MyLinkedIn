import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
     
      <Header/>
      {/*AppBody*/}
      <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>
       {/*Sidebar*/}
       {/*Feed*/}
      
       {/*Widgets*/}
    </div>
  );
}

export default App;
