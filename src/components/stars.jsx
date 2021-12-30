import React, {useState} from 'react';
import {Form,Card} from 'react-bootstrap';

function Stars() {
  const [data, setData]=useState({})

  // Fetch Function   
  fetch("/data/starData.json")
    .then(response => response.text())
    .then(d => setData(JSON.parse(d)))
    .catch(function(err){console.log(err, ' error')})
  
  const imgLayout = Object.keys(data).map((key)=>{
    return <div className='col'><Card style={{width:'100px',background:'#00000000', paddingBottom:'25px'}}><img width="100" height="100" key={key} alt={key}src={data[key]}/></Card></div>
  });

  return (
    <>
    <div className='centered'>
      <Form className='foreground'><Form.Control placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
    <div className='starContainer'>
    <div className='row' style={{width:'80%'}}>
      {loadedImgs}
    </div>
    </div>
    </>
  );
}

export default Stars;