import React from 'react';
import './App.css';
import Post from './Post';

function App() {
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
      <Post username="aliwilden" caption="Hey wow it works" imageUrl="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" />
      <Post username="wulan" caption="mantul sekali nih" imageUrl="https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640" />
      <Post username="murtado" caption="Bisa bekerja dengan baik" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBvjD2CimTjRuPMRx1PbMLEBB3wWSBrAnzuw&usqp=CAU" />
    </div>
  );
}

export default App;
