import React, {useEffect, useState} from 'react';
import {Form,Card} from 'react-bootstrap';

function Stars() {
  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
  const images = importAll(require.context('../stars', false, /\.(png)$/));

  const [allStars, setAllStars]=useState([]);
  const [starCount,setStarCount]=useState(50);
  const [showResults, setShowResults] = useState(true);
  const [stars, setStars] = useState([]);
  const loadMore = () => {
    setStarCount(starCount+25)
    if(starCount>=460){setShowResults(false);}
  };

  const loadAll = () => {
    setStarCount(467);
    setShowResults(false);
  };

  useEffect(()=>{
    fetch("/data/starData.json")
      .then((res)=>res.json())
      .catch((error)=>console.log(error))
      .then((data)=>{
        setAllStars(data)
        setStars(Object.keys(allStars).slice(0,starCount).map((key)=>{
          console.log("here");
          return(
            <div key={key} className='col'>
              <Card style={{width:'100px', background:'#00000000', paddingBottom:'25px'}}>
                <img width="100" height="100" key={key} alt={key} src={images[allStars[key]]}/>
              </Card>
            </div>
        )}));
      }).catch((err)=>console.log(err));
  },[])
  

  
  const filter = (keyword) => {
    if (keyword.length > 0){
      setShowResults(false);
      let starSearch = Object.keys(allStars).filter(word => word.toLowerCase().includes(keyword)).map((key)=>{
        return(
          <div key={key} className='col'>
            <Card style={{width:'100px', background:'#00000000', paddingBottom:'25px'}}>
              <img width="100" height="100" key={key} alt={key} src={images[allStars[key]]}/>
            </Card>
          </div>
      )});
      console.log(stars);
      setStars(starSearch);
    } else{
      setShowResults(true);
      setStarCount(starCount);
    }
  };

  return (
    <>
    <div className='centered'>
      
      <Form className='foreground'><Form.Control onChange={(e) => filter(e.target.value.toLowerCase())} placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
    <div className='starContainer'>
    <div className='row' style={{width:'80%', alignContent:'center'}}>
      {stars}
    </div>
    </div>
    <div className='centered' style={{paddingBottom:'15px'}}>
    { showResults ? <button onClick={loadMore} style={{zIndex:'950', width:'50%'}}>Load More</button> : null}
    </div>
    <div className='centered'>
    { showResults ? <button onClick={loadAll} style={{zIndex:'950', width:'50%'}}>Load All</button> : null}
    </div>
    </>
  );
}

export default Stars;