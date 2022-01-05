import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';

function StarViewer() {
  const [star, setStar]=useState([]);
  const [owned, setOwned]=useState(true);

    useEffect(()=>{
        fetch("/data/starMeta/"+new URLSearchParams(window.location.search).get('star')+".json")
          .then((res)=>res.json())
          .then((data)=>{
            setStar(data)
          }).catch((err)=>console.log(err));
    },[])

    const imgSrc=require('../stars/'+new URLSearchParams(window.location.search).get('star')+'.png');
    const owner='PoopBazooka';
    const amountOwned=4;
    const totalAmount=10;

    const buy = () => {
      console.log('pressed!');
    }

    return (
    <div className='centered' align='center' style={{paddingTop: '150px',color:'white',textAlign:'center',background:'#00000000', paddingBottom:'25px'}}>
      <div className='row'>
      <div className='col' style={{zIndex:'950'}}>
        <h1>{star['name']}  {owned?'(Sold Out)':null}</h1>
        <img width="200" height="200" alt='' src={imgSrc} style={{border:'1px solid white', background:'black'}} />
      </div>
      <div className='col' style={{zIndex:'950'}}>
        <p style={{marginTop:'25px'}}>Constellation: {star['constellation']}</p>
        <p>Size: {star['size']}</p>
        <p>Number of Constituents: {star['constituents']}</p>
        <p>Amount Owned: {amountOwned} of {totalAmount}</p>
        <p>Owner(s): {owner}</p>
        <Button style={{width:'200px'}} onClick={buy}>Buy</Button>
      </div>
      </div>
    </div>
    );
}

export default StarViewer;
