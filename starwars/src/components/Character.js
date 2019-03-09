import React from 'react';
import './StarWars.css';

const Character = (props) => {
  console.log('Character props  ', props);


  return (

    <div className = "main-container">
      <h2 className = 'name'> Name: {props.character.name}</h2>







    </div>







  )








};

export default Character;