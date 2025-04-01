import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FormularioEncuesta2 from './components/FormularioEncuesta2';



function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/FormularioEncuesta2" replace />} />
            <Route path="/FormularioEncuesta2/" element={<FormularioEncuesta2 />} />
          </Routes>
      </Router>
  );
}

export default App;