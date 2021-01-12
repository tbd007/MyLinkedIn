import React from 'react';
import { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post.js";
import {db} from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function Feed() {
    const [input, setInput] = useState([]);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data: doc.data(),
            }))
            )
        ));
        }, []);

    const sendPost= (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name:"Tanja Babic-Debrosse",
            description: "",
            message: input,
            photoUrl:"",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
        
    }
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                        </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} color="#70b5f9" title="Photo"/>
                    <InputOption Icon= {SubscriptionsIcon} title="Video" color="e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcO"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </div>
            </div>
            <FlipMove>
            <Post name="Tanja BD" description="This is a PINNED post" message="Welcome to my personal LinkedIn"  />
            {posts.map(({ id, data:{ name, description, message, photoUrl}}) => (
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl} />
            ))}
           </FlipMove>
        </div>
    )
}

export default Feed
