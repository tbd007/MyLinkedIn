import React , { forwardRef} from 'react';
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PublicIcon from '@material-ui/icons/Public';

const Post = forwardRef ( ({name, description, message, photoUrl}, ref) => {
    var today =  "babicdebrosse@outlook.de"

    return (
        <div ref={ref} className="post">
          <div className="post_header">
              <img className="avatar" src="avatar.png"/>
              <div className="post_info">
                  <h2>{name}</h2>
                  <p>{today}</p>
                  <p>just now <PublicIcon className="publicicon"/></p>
                  <img src={photoUrl}/>
                  
              </div>
          </div>

          <div className="post_body">
              <p>{message}</p>
          </div>

          <div className="post_buttons">
              <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
              <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
              <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
              <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
          </div>
        </div>
    )
})

export default Post
