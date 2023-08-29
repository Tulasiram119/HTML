import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode is enabled","success");
      document.title="TextUtiles-DarkMode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode is enabled","success");
      document.title="TextUtiles-LightMode"
    }
  }
  const greenMode = ()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="#35C649";
      showAlert("Green mode is enabled","success");
      setMode("dark");
      document.title="TextUtiles-DarkMode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode is enabled","success");
      document.title="TextUtiles-LightMode"
    }
    

  }
  const yellowMode = ()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="#CAB911";
      showAlert("Yellow mode is enabled","success");
      setMode("dark");
      document.title="TextUtiles-DarkMode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode is enabled","success");
      document.title="TextUtiles-LightMode"
    }
    

  }

  return (
    <>
   
<Navbar title = "TextUtils" aboutText="About TextUtiles" mode={mode} toggleMode={toggleMode} greenMode={greenMode} yellowMode={yellowMode}/>
<Alert alert={alert}/> 
<Router>
<div className="container my-3">
  <Routes>
    <Route exact path="/" element={<TextForm heading="Enter your text below to analyze" mode={mode} showAlert={showAlert}/>} />
    <Route excat path="/About" element={<About/>}/>
  </Routes>

      {/* <TextForm heading="Enter your text below to analyze" mode={mode} showAlert={showAlert}/> */}
  </div>
</Router>

    </>
  
  );
}

export default App;
