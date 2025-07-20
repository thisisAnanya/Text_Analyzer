import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Text from './component/Text';
// import {
//   BrowserRouter as Router,
  
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "Success")
      // setInterval(()=>{
      //   document.title="TetUtils Install Now";
      // },2000);

      //document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "Success")
      //document.title = "TextUtils - Light Mode";
    }
  }
  return (
   <>
{/* <Router> */}
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className='container my-3'>
  <Text showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}/>
  {/* <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Text showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}/>}/>
  </Routes> */}

 </div>
{/* </Router> */}
</>
   
  );
}

export default App;
