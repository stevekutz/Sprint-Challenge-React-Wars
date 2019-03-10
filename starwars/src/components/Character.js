import React from 'react';
import './StarWars.css';

const Character = (props) => {
  console.log('Character props  ', props);


  return (

    <div className = "main-container">
      <h1 className = 'name'> Name: {props.character.name}</h1>


      <div className = "character-container">
        <div className = 'physical'>
          <h2> Physical Attrbutes </h2>

          <h3 className = 'physical_attr'> Gender: {props.character.gender}</h3>
          <h3 className = 'physical_attr'> Hair: {props.character.hair_color}</h3>
          <h3 className = 'physical_attr'> Height: {props.character.height} inches</h3>
          <h3 className = 'physical_attr'> Homeworld: {props.character.homeworld}</h3>
          <h3 className = 'physical_attr'> Mass: {props.character.mass} pounds</h3>
          <h3 className = 'physical_attr'> Species: {props.character.species[0]} </h3>
          <h3 className = 'physical_attr'> URL: {props.character.url} </h3>

        </div>


        <div className = "array_items">

          <div className = "films ">
            <h2> Films </h2>
            <h3 className = 'film_attr'> {props.character.films[0]}</h3>
            <h3 className = 'film_attr'>{props.character.films[0]}</h3>
          </div>

          <div className = "starships ">
            <h2> Starships </h2>
            <h3 className = 'starships_attr'> {props.character.vehicles[0]}</h3>
            <h3 className = 'starships_attr'> {props.character.vehicles[0]}</h3>
          </div>

          <div className = "vehicles ">
            <h2> Vehicles </h2>
            <h3 className = 'vehicle_attr'> {props.character.vehicles[0]}</h3>
            <h3 className = 'vehicle_attr'> {props.character.vehicles[0]}</h3>
          </div>




        </div>


      </div>










    </div> // end main-container







  )








};

export default Character;