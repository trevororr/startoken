import React from 'react';
import { Web3Context } from './contexts/web3context';
function Home() {

  return (
    <Web3Context.Consumer>
      {({web3}) => {
        return (<>
        <div className='centered'>
          <h1 id="titleText">StarToken</h1>
          <p>{JSON.stringify(web3)}</p>
        </div>
       
        </>)
      }
    }
    </Web3Context.Consumer>
  );
}

export default Home;
