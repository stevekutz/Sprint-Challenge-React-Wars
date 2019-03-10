import React from 'react';
import Dog from './Dog';
import './dogs.css';

const DogList = (props) => {
  console.log('DogList props ', props);

  return (


    <div className = "dogList-container">

      {props.cutedogs.map( (item, i) => {

        return (
          <Dog
            className = "dogIMG"
            src = {props.item}
            key = {i}


          />



        )


      })}



    </div>




  )



};

export default DogList;