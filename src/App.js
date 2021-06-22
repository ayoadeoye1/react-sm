import React, { useState } from 'react';
import './App.css';
import Media from './Comp/media';

function App() {
  const [hey, setHey] = useState('react hook in progress');

return(
  <div className="background">
      <center>
      <h1 className="h1">sunlight tech</h1>
      <div>
        <div className="add">
        <h2>
          welcome to sunlight tech official page
        </h2>
        </div>
        <div className="med">
          <Media />
        </div>
        <p>{hey}</p>
        <button onClick={() =>{ setHey(hey + ", you're welcome") }}>change</button>
      </div>
      </center>
    </div>
)
}

export default App;