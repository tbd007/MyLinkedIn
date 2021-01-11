import React from 'react';
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                        </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} color="#70b5f9" title="Photo"/>
                    <InputOption Icon= {SubscriptionsIcon} title="Video" color="e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcO"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </div>
            </div>
            
        </div>
    )
}

export default Feed
