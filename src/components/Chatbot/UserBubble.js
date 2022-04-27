import React from "react";
import "./UserBubble.css";

export default function UserBubble(data) {
  console.log("in user bbbble" + data);

  return (
    <div className='user-container'>
      <div className='user-bubble'>
        <p className='user-text'>{data.data}</p>
        {/* { data.map(data => <p className='user-text'>{ data }</p>)} */}
      </div>
    </div>
  );
}
