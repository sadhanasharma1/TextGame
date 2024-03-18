
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
// import About from './components/About.js'
import React, { useState } from 'react'
import Alert from './components/Alert.js'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //a state variable darkMode which will tell that the dark mode is enabeled or not
  const [mode1, setMode1] = useState('dark');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setMode1('light')
      setBtnText('Disable Dark Mode')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextGame - Dark Mode'
    }
    else {
      setMode('light')
      setMode1('dark')
      setBtnText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success")
      document.title = 'TextGame - Light Mode'
    }
  }
  // return (
  //   <>
  //     {/* /user-->Componet1
  //   /user/home---> Component2 React matches the path partially so its better to use exact path attribute to mention the path*/}
  //     <Router>
  //       <Navbar title="TextGame" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} mode1={mode1} btnText={btnText} />
  //       <Alert alert={alert} />
  //       <div className="container my-3">
  //         <Routes>
  //           <Route exact path="/about" element={< About />}></Route>
  //           <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
  //         </Routes>
  //       </div>
  //     </Router>
  //   </>
  // );

  return (
    <>
      <Navbar title="TextGame" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} mode1={mode1} btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-3">
       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>

    </>
  );

}

export default App;

