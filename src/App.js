import './App.css';
import Login from './Login';
import Register from './Register';
import Forgotpass from './Forgotpass';
import Resetpass from './Resetpass';
import Urlshortner from './Urlshortner';
import {Routes, Route} from 'react-router-dom';

import Home from './Home';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpassword" element={<Forgotpass/>}/>
      <Route path="/resetpassword" element={<Resetpass/>}/>
      <Route path="/urlshortner" element={<Urlshortner/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
