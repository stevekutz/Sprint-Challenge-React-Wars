import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = (props) => {
  console.log('CharacterList props  ', props);


  return (

    <div className = "main-container">

      {props.characters.map ( character => {
        return (
          <Character
            className = "character_item"
            character = {character}
            key = {character.name}
          />


        );





        })}

    </div>

  )








};

export default CharacterList;