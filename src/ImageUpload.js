import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { storage, db } from './firebase';
import firebase from 'firebase';
import './ImageUpload.css'

function ImageUpload({username}) {

  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')
  const [progress, setProgress] = useState(0)
  const [caption, setCaption] = useState('')

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    
    uploadTask.on(  // ini untuk visual pada progress bar
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Kalau terjadi error
        console.log(error);
        alert(error.message);
      },
      () => {
        // Jika berhasil upload gambar, masuk kesini
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // post image inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username
            });

            setCaption('');
            setImage(null);
            setProgress(0);
          });
      }
    )
  }

  return (
    <div className="imageupload">
      
      {/* I want to have... */}
      {/* Caption input */}
      {/* File picked */}
      {/* Post Button */}

      <progress className="imageupload__progress" value={progress} max="100" />
      <input type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)} value={caption} />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>
        Upload
      </Button>


    </div>
  )
}

export default ImageUpload