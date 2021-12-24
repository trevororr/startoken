import React from 'react';

async function getStars(){
  let response = await fetch('./starData.json')
  return await response.json();
}

function Stars() {
  var stars = getStars();
  console.log(stars);

  return (
    <div align='center'>
        <h1 id="titleText">Stars</h1>
        
    </div>
  );
}

export default Stars;