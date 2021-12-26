import React from 'react';
import {Form} from 'react-bootstrap';

function Stars() {
  return (
    <div className='centered'>
        <Form id='foreground'><Form.Control placeholder="Star Name" style={{backgroundColor:'#000000',color:'#ffffff'}} id='nameBar' /></Form>
    </div>
  );
}

export default Stars;