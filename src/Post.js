import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

function Post() {
  return (
    <div className="post">
      {/* Header -> Avatar + Username */}
      <div className="post__header">
        <Avatar
          className='post__avatar'
          alt='WildenAli'
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      {/* Image */}
      <img className="post__image" src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" />

      {/* Username + Caption */}
      <h4 className="post__text"><strong>Username </strong>caption</h4>
    </div>
  )
}

export default Post
