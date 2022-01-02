import React, {useEffect, useState} from 'react';
import {Form,Card} from 'react-bootstrap';




function Stars() {
  const [allStars, setAllStars]=useState([]);
  const [starCount,setStarCount]=useState(20);

  const loadMore = () => {
    setStarCount(starCount+10)
  };

  useEffect(()=>{
    fetch("/data/starData.json")
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setAllStars(data)
      });
  },[])

  const stars = Object.keys(allStars).slice(0,starCount).map((key)=>{
    console.log("image updated")
    return(
      <div key={key} className='col'>
        <Card style={{width:'100px', background:'#00000000', paddingBottom:'25px'}}>
          <img width="100" height="100" key={key} alt={key} src={allStars[key]}/>
        </Card>
      </div>
    )});
  
  return (
    <>
    <div className='centered'>
      
      <Form className='foreground'><Form.Control placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
    <div className='starContainer'>
    <div className='row' style={{width:'80%'}}>
      {stars}
      <button onClick={loadMore} style={{zIndex:'950'}}>loadmore</button>
    </div>
    </div>
    </>
  );
}

export default Stars;