import React from 'react';
import "./Profile.css";
import {Avatar} from "@material-ui/core";

function Sidebar() {


    return (
        <div className="sidebar">
            <div className="sidebar_top">

                <h2>Tanja Babic-Debrosse</h2>
                <h4>babicdebrosse@outlook.de</h4>
                <h4><a href="https://tbddev.com">https://tbddev.com</a></h4>
              
            </div>
            <div className="sidebar_stats">
               
            </div>
            <div className="sidebar_bottom">
                <p>Features</p>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
                <h4>React</h4>
                <h4>Node</h4>
                <h4>Java</h4>
                <h4>C#</h4>
                <h4>Software Testing</h4>
                <h4>UX/UI Design</h4>
              
            </div>
        </div>
    )
}

export default Sidebar

