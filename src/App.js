import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Password from './components/password/Password';
import Home from './components/home/Home';
import Faq from './components/faq/Faq';
import OurStory from './components/story/OurStory';
import Registry from './components/registry/Registry';
import Venue from './components/venue/Venue';
import Captcha from './components/captcha/Captcha';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/password' element={<Password />} />
          <Route path='/captcha' element={<Captcha />} />
          <Route path='/home' element={<Home />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/ourstory' element={<OurStory />} />
          <Route path='/registry' element={<Registry />} />
          <Route path='/venue' element={<Venue />} />
        </Routes>
    </div>
  );
}

export default App;
