import React, { useState, useEffect } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';

function Post({postId,  username, caption, imageUrl }) {

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()))
        });
    }

    return () => {
      unsubscribe();
    }
  }, [postId])

  return (
    <div className="post">
      {/* Header -> Avatar + Username */}
      <div className="post__header">
        <Avatar
          className='post__avatar'
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      {/* Image */}
      <img className="post__image" src={imageUrl} />

      {/* Username + Caption */}
      <h4 className="post__text"><strong>{username} </strong>{caption}</h4>

      <form>
        <input
          className="post__input"
          type="text"
          placeholder="Add a commet..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Post
