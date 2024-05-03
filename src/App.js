import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Password from './components/password/Password';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/password' element={<Password />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>

    </div>
  );
}

export default App;
