import React from 'react';
import {Card} from 'react-bootstrap';

function About() {
  return (
    <div className='centered' style={{display:'block'}}>
        <h1 id="aboutText">About</h1>
        <div align='center'>
        <div style={{width:'85%', maxWidth:'500px', margin:'50px 0 25px 0'}} align='center'>
          <Card style={{margin:'25px 0 50px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">Algorithm Generated Art</Card.Header>
            <Card.Body style={{background:'#303030', color:'white'}}>
              <p>StarToken is algorithmically generated using only four parameters: starName, starColor, starRadius, and starAmount.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'50px 0 50px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">Rarity System</Card.Header>
            <Card.Body style={{background:'#303030', color:'white'}}>
              <p>Some stars will only have one copy that will be sold on a first come first serve basis.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'50px 0 50px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">OpenSea Compatibility</Card.Header>
            <Card.Body style={{background:'#303030', color:'white'}}>
              <p>All stars will be able to be resold on OpenSea.</p>
            </Card.Body>
          </Card>
        </div>
        </div>
    </div>
  );
}

export default About;
