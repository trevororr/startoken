import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function Stars() {
  const [data , setData]=useState(null)

  // Fetch Function   
  fetch("/data/starData.json").then(
    res => res.json())          // convert to plain text
  .then(text => console.log(text))
  .then(function(data){
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )
  
  // use data State Variable For Get Data Use JavaScript Map Mathod
  const starLayout=data? data.map(
    function(data){
      return (<div className="card"> 
              <h4>{data[0]}</h4>
              </div>)
    }
  ):""

  return (
    <>
    <div className='centered'>
      <Form id='foreground'><Form.Control placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
    <div className='centered'>
      <ul>{starLayout}</ul>
    </div>
    </>
  );
}

export default Stars;