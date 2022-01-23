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
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">Favorite System</Card.Header>
            <Card.Body style={{background:'#303030', color:'white'}}>
              <p>50 stars have been chosen to be favorited and will be auctioned off after all of the common stars are sold. These will be signified by an orange border.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'50px 0 50px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">OpenSea Compatibility</Card.Header>
            <Card.Body style={{background:'#303030', color:'white'}}>
              <p>All stars will be able to be bought and sold on OpenSea.</p>
            </Card.Body>
          </Card>
          <Card style={{margin:'50px 0 50px 0'}}>
            <Card.Header style={{fontSize: "1.6em", backgroundColor:'#212529', color:'white'}}  className="text-center">Genuine Stars</Card.Header>
            <Card.Body style={{background:'#303030', color:'white'}}>
              <p>All of the stars are actual Proper named stars with the actual color and number of constituents of the system.</p>
            </Card.Body>
          </Card>
        </div>
        </div>
    </div>
  );
}

export default About;
