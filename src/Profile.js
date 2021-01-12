import React from 'react';
import "./Profile.css";


function Profile() {


    return (
        <div className="sidebar">
            <div className="sidebar_top">

                <h2>Tanja Babic-Debrosse</h2>
                <h4>babicdebrosse@outlook.de</h4>
                <h4><a href="https://tbddev.com">https://tbddev.com</a></h4>
                <h4><a href="https://github.com/tbd007">Github TBD</a></h4>
              
            </div>
            <div className="sidebar_stats">
               <p>Portfolio</p>
               <img src="https://www.tbddev.com/assets/webflix.gif" width="100" height="65"/>
               <img src="https://www.tbddev.com/assets/cc-form.gif" width="100" height="65"/>
               <img src="https://www.tbddev.com/assets/neumorph.gif" width="100" height="65"/>
               <img src="https://www.tbddev.com/assets/iging.jpg" width="100" height="65"/>
               <img src="https://www.tbddev.com/assets/MCDCalc.jpg" width="100" height="65"/>
               <img src="https://www.tbddev.com/assets/mykanban.jpg" width="100" height="65"/>
               <p><a href="https://tbddev.com" >More...</a></p>
            </div>
            <div className="sidebar_bottom">
                <p>Featured</p>
                <h4>#HTML</h4>
                <h4>#CSS</h4>
                <h4>#JavaScript</h4>
                <h4>#React</h4>
                <h4>#Node</h4>
                <h4>#Java</h4>
                <h4>#C#</h4>
                <h4>#Software Testing</h4>
                <h4>#UX/UI Design</h4>
              
            </div>
        </div>
    )
}

export default Profile

