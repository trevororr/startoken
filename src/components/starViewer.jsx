import React, {useEffect, useState} from 'react';

function StarViewer() {
    const [star, setStar]=useState([]);
    const starParam = new URLSearchParams(window.location.search);

    useEffect(()=>{
        fetch("/data/token_uri/"+starParam+".json")
          .then((res)=>res.json())
          .catch((error)=>console.log(error))
          .then((data)=>{
            setStar(data)
          }).catch((err)=>console.log(err));
    },[])

    return (
    <div className='centered'>
        <h1 style={{color:'white', paddingTop: '100px'}}>{starParam}</h1>
    </div>
    );
}

export default StarViewer;
