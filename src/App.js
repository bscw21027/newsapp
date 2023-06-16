import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News category="general" />} />
        <Route path="/business" element={<News category="business" />} />
        <Route path="/entertainment" element={<News category="entertainment" />} />
        <Route path="/general" element={<News category="general" />} />
        <Route path="/health" element={<News category="health" />} />
        <Route path="/science" element={<News category="science" />} />
        <Route path="/sports" element={<News category="sports" />} />
        <Route path="/technology" element={<News category="technology" />} />
      </Routes>
    </Router>
  );
}

export default App;
