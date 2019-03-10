import React from 'react';
import './dogs.css';

const Dog = (props) => {
  console.log('Dog props ', props);

  return (
    <div className = " dogIMG">

      <img src = {props.src} alt = "dog_image"/>

    </div>

  )

};

export default Dog;