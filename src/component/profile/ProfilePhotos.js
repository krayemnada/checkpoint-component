import React from 'react'
import image from "./image.jpg";
const ProfilePhotos = () => {
  return (
    <div className='col-md-12'>
        <br/>
        <div className='ph'>
      <img  src={image} className="imagepr"alt="imgsrc" width='300px' height="400px" />
      </div>
    </div>

  )
}

export default ProfilePhotos
