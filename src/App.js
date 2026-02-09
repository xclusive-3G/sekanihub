import Homepage from './pages/Homepage/Homepage';
import Getstartpage from './pages/Getstartpage/Getstartpage';
import Submitpage from './pages/Getstartpage/Submitpage';
import Aboutus from './pages/AboutUs/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/start-project" element={<Getstartpage />} />
        <Route path="/project-submitted" element={<Submitpage />} />
        <Route path="*" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
