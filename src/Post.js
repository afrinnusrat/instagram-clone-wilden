import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* Header -> Avatar + Username */}
      <div className="post__header">
        <Avatar
          className='post__avatar'
          alt='WildenAli'
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      {/* Image */}
      <img className="post__image" src={imageUrl} />

      {/* Username + Caption */}
      <h4 className="post__text"><strong>{username} </strong>{caption}</h4>
    </div>
  )
}

export default Post
