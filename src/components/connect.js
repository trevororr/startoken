import { render } from '@testing-library/react';
import '../App.css';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";


import React, {useState} from 'react';
import Web3 from 'web3';



const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      bridge: "https://bridge.walletconnect.org",
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
      },
      network: "binance",
    },
  },
};
const web3Modal = new Web3Modal({
  cacheProvider: false, // optional
  providerOptions // required
});



const ConnectFrame = ()=>{
  const [web3, setweb3] = useState(null);
  const connect = async () => {
    const provider = await web3Modal.connect();
    setweb3(new Web3(provider));
  }
  return (
    <>
      <div className="col-md-12 col-lg-6"> 
          <button  onClick={connect}>Connect</button>
      </div>
    </>
    );
}

export default ConnectFrame;
