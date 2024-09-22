import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import EbookPurchase from './components/Pages/EbookPurchase'; // E-Kitap Satın Alma Sayfası
import Payment from './components/Pages/Payment'; // Ödeme Sayfası
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/ebook-purchase" element={<EbookPurchase />} /> {/* E-Kitap Satın Alma Sayfası */}
      <Route path="/payment" element={<Payment />} /> {/* Ödeme Sayfası */}
    </Routes>
  );
}

export default App;
