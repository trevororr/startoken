import React, {useState} from 'react';
import {Form,Card} from 'react-bootstrap';




function Stars() {
  const useGetStars = async function() {
    console.log("get stars");
    const [data, setData]=useState({})
    console.log(data);
    if(Object.keys(data).length === 0){
      console.log("data is empty");
      console.log(data);
      return [];
    }
    console.log("little further")
    const response = await fetch("/data/starData.json")

    const tempData =  JSON.parse(await response.text())
    console.log("HERE");
    const imgs = Object.keys(tempData).map((key)=>{
            return(
              <div>
                <Card style={{width:'100px', background:'#00000000', paddingBottom:'25px'}}>
                  <img width="100" height="100" key={key} alt={key}src={tempData[key]}/>
                </Card>
              </div>
            )});
    setData(imgs);
    return imgs;
  }  
  
  

  const data = useGetStars();
  const [display, setDisplay] = useState([]);

  function loadMore(){
    console.log('here');
    console.log(data);
    setDisplay(data.slice(0,display.length+5));
  }
  

  return (
    <>
    <div className='centered'>
      
      <Form className='foreground'><Form.Control placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
    <div className='starContainer'>
    <div className='row' style={{width:'80%'}}>
      {display}
      <button onClick={loadMore}>loadmore</button>
    </div>
    </div>
    </>
  );
}

export default Stars;