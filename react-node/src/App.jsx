import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componants/Header.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Card from './componants/Card.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/home" element={<HomePage />} />  */}
          <Route path="/home" element={<Portfolio />} /> 
          <Route path="/card" element={< Card/>} /> 
        </Routes>
    </BrowserRouter>
  );
}