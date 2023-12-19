import React from 'react'; 
import video from './assets/backdrop.mp4'; 
import SocialFollow from "./SocialFollow"

function App() {
  return (
    <div>
      <video autoPlay = {true} loop = {true} muted = {true}>
        <source src = {video} type = 'video/mp4' />
      </video> 
      <div className='content'>
        <h1>Boston College Computer Science Society</h1>
        <p>Scroll to explore.</p> 
      </div> 
      <div className='social'>
        <SocialFollow />
      </div>
    </div>
    
  );
}

export default App;
