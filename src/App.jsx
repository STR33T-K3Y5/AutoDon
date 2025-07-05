import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Results from './Pages/Results';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;