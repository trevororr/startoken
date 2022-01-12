import React, { useState } from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './components/home';
import Stars from './components/stars';
import About from './components/about';
import StarViewer from './components/starViewer';
import {Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { Web3Context } from './components/contexts/web3context';
import fortmatic from 'fortmatic';


const connectWeb3 = async () => {
  //  Create WalletConnect Provider
  const providerOptions = {
    walletconnect: {
      package : WalletConnectProvider, 
      options: {
        infuraId: "a624db2ddf3c49a0afec9d2f90a6d3dd",
      } 
    },
    fortmatic:{
      package: fortmatic,
      options: {
        key: 'pk_live_DC8BCA9D3AE99BE9'
      }
    }
  }
  const web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    
  });
  //  Enable session (triggers QR Code modal)
  const provider = await web3Modal.connect();

  //  Create Web3
  const web3 = new Web3(provider);
  console.log(web3)
  return web3;
}

function App() {
  document.body.style = 'background: #000000;';
  const [web3, setWeb3] = useState(null);
  return (
    <div className="App">
      <Web3Context.Provider value={{web3, setWeb3, connectWeb3}}>
        <canvas style={{display: 'block'}} id="starCanvas"></canvas>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/about" element={<About />} />
            <Route path="/starViewer" element={<StarViewer />} />
            
          </Route>
        </Routes>
      </Web3Context.Provider>
    </div>
  );
}

export default App;
