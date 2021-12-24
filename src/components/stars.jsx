import React from 'react';

async function getStars(){
  let response = await fetch('./starData.json')
  return await response.json();
}

function Stars() {
  var stars = getStars();
  console.log(stars);
  // const starData = stars.map((number) =>
  //   <li key={number[0].toString()}>
  //     {number}
  //   </li>
  // );

  return (
    <div align='center'>
        <h1 id="titleText">Stars</h1>
        {/* <h2>{starData}</h2> */}
        
    </div>
  );
}

export default Stars;