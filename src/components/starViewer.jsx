import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';

function StarViewer() {
  const [star, setStar]=useState([]);

    useEffect(()=>{
        fetch("/data/starMeta/"+new URLSearchParams(window.location.search).get('star')+".json")
          .then((res)=>res.json())
          .then((data)=>{
            setStar(data)
          }).catch((err)=>console.log(err));
    },[])

    const imgSrc=require('../stars/'+new URLSearchParams(window.location.search).get('star')+'.png');

    return (
      <center>
    <div className='centered' align='center' style={{paddingTop: '100px', width:'80%', color:'white',textAlign:'center',background:'#00000000', paddingBottom:'25px'}}>
      <div style={{zIndex:'950', backgroundColor:"black", display:'flex', padding:'10px 40px 40px 40px', border:'1px white solid'}}>
        <div classname='row'>
          <div className='col'>
            <img width="200" height="200" alt='' src={imgSrc} style={{marginBottom:'50px', border:'2px', transform:'translateY(25%)'}} />
          </div>
          <div style={{marginTop:'50px'}}>
            <h1>{star['name']}</h1>
            <p>Constellation: {star['constellation']}</p>
            <p>Size: {star['size']}</p>
            <p>Number of Constituents: {star['constituents']}</p>
            <a href='https://opensea.io/collection/startokennft'><Button style={{width:'200px', background:'#212529', border:'white'}}>Buy</Button></a>
        </div>
      </div>
      </div>
    </div>
    </center>
    );
}

export default StarViewer;
