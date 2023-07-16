import './App.css';
import Navbar from './Component/Navbar';
import InputForm from './Component/InputForm';
import About from './Component/About';
import Alert from './Component/Alert';
import { useState } from 'react';
function App() {
const [alert, setAlert] = useState(null)
const showAlert = (message , type) => {
  setAlert({
    message : message,
    type : type
  })
  setTimeout(
    () => setAlert(null), 
    2000
  );
}
  return (
<div>
  <Navbar/>
  <Alert alert = {alert}/>
  <InputForm Text = "Enter the text to analyze"  showAlert= {showAlert}/>
  <About/>  
  
</div>
  )
}

export default App;
