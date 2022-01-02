import React, {useEffect, useState} from 'react';
import {Form,Card} from 'react-bootstrap';




function Stars() {
  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
  const images = importAll(require.context('../stars', false, /\.(png|jpe?g|svg)$/));
  console.log(images);

  const [allStars, setAllStars]=useState([]);
  const [starCount,setStarCount]=useState(20);
  const [search, setSearch] = useState('');

  const loadMore = () => {
    setStarCount(starCount+10)
  };

  useEffect(()=>{
    fetch("/data/starData.json")
      .then((res)=>res.json())
      .then((data)=>{
        setAllStars(data)
      });
  },[])

  const stars = Object.keys(allStars).slice(0,starCount).map((key)=>{
    return(
      <div key={key} className='col'>
        <Card style={{width:'100px', background:'#00000000', paddingBottom:'25px'}}>
          <img width="100" height="100" key={key} alt={key} src={images[allStars[key]]}/>
        </Card>
      </div>
  )});

  const filteredStars = search.length === 0 ? stars : stars.filter(search.toLowerCase())
  
  return (
    <>
    <div className='centered'>
      
      <Form className='foreground'><Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
    <div className='starContainer'>
    <div className='row' style={{width:'80%'}}>
      {filteredStars}
      <button onClick={loadMore} style={{zIndex:'950'}} id='loadButton'>loadmore</button>
    </div>
    </div>
    </>
  );
}

export default Stars;