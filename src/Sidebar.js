import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Tanja Babic-Debrosse</h2>
                <h4>babicdebrosse@outlook.de</h4>
                <p>Webdesigner | Front End Dev | Software Tester | UX Designer</p>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on posts</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem('javascript_programming')}
                {recentItem('UX_design')}
                {recentItem('css_tricks')}
                {recentItem('frontenddevelopment')}
            </div>
        </div>
    )
}

export default Sidebar
