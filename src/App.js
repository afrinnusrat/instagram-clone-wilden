import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {

  const [posts, setPosts] = useState([
    {
      username: "aliwilden",
      caption: "Hey wow it works",
      imageUrl: "https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg"
    },
    {
      username: "kairav",
      caption: "mantul sekali nih",
      imageUrl: "https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640"
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImager"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Instagram Clone Wilden 🔥 🚀</h1>
      
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      
    </div>
  );
}

export default App;
