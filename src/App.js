import './App.css';
import styled from 'styled-components'
import Crawl from './Crawl.js'
import React, {useState} from 'react'
import Input from './FastTextInput.js'

function App() {
  const [text, setText] = useState('#faktor')
  return (
    <div>
      <Input text={text} setText={setText} />
      <Crawl  text={text}/>
      
    </div>
  );
}

export default App;
