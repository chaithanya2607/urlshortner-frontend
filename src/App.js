import './App.css';
import Login from './components/Login';
import Register from './Register';
import Forgotpass from './components/Forgotpass';
import Resetpass from './components/Resetpass';
import Urlshortner from './components/Urlshortner';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';


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
