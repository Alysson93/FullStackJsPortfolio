import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:slug' element={<PortfolioDetail />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
