import React from 'react';
import "./HeaderOption.css";
import {Avatar} from "@material-ui/core";


function HeaderOption({avatar,title, Icon}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon"/>} 
            {avatar &&  <Avatar className="headerOption_icon" src={avatar} />}
           { /*if there is an icon render it*/}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
