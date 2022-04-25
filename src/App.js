import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  
  return (
    <>
      <Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} /> 
      {/*<Alert alert = {alert}/>*/}
      <div className="container my-3"> 
      <TextForm heading="Enter text here to analyze" mode={mode}/>
      </div>  
    </>
    
  );
}

export default App;
