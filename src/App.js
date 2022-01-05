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
import { Web3Context } from './components/contexts/web3context';

const connectWeb3 = async () => {
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    infuraId: "a624db2ddf3c49a0afec9d2f90a6d3dd", 
  });

  //  Enable session (triggers QR Code modal)
  await provider.enable();

  //  Create Web3
  return new Web3(provider);
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
