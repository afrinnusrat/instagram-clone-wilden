import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className="post">
      {/* Header -> Avatar + Username */}
      <h3>Username</h3>

      {/* Image */}
      <img className="post__image" src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" />

      {/* Username + Caption */}
      <h4 className="post__text"><strong>Username </strong>caption</h4>
    </div>
  )
}

export default Post
