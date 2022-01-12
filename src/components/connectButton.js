import React, { useContext } from 'react';
import { Web3Context } from './contexts/web3context';

const ConnectButton = ()=>{
    const {setWeb3, connectWeb3} = useContext(Web3Context);
    return (
        <button onClick={()=>setWeb3(connectWeb3())}>Connect</button>  
    )
}

export default ConnectButton;