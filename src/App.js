import React from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './components/home';
import Stars from './components/stars';
import About from './components/about';
import StarViewer from './components/starViewer';
import {Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  document.body.style = 'background: #000000;';
  return (
    <div className="App">
        <canvas style={{display: 'block'}} id="starCanvas"></canvas>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/about" element={<About />} />
            <Route path="/starViewer" element={<StarViewer />} />
            
          </Route>
        </Routes>
    </div>
  );
}

export default App;
