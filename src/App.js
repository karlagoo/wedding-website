import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Password from './components/Signup/Password';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />}>
        <Route path='/password' element={<Password />}/>
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
