import React from 'react';
import './dogs.css';

const Dog = (props) => {
  console.log('Dog props ', props);

  return (
    <div className = " dogIMG-container">

      <img
        className = "dogIMG"
        src = {props.src} alt = "dog_image"/>

    </div>

  )

};

export default Dog;