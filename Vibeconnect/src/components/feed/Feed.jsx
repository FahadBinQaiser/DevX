// src/components/feed/Feed.jsx
import React from 'react';
import Post from '../post/Post';
import { Posts } from "../../pages/dummyData";
import "./feed.css";

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
