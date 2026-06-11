import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SoundproofBooth from './pages/SoundproofBooth';
import ProductDetail from './pages/ProductDetail';
import PaddleBoard from './pages/PaddleBoard';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/soundproof-booth" element={<SoundproofBooth />} />
        {/* Dedicated paddle-board page — must be before the generic :slug route */}
        <Route path="/products/paddle-board" element={<PaddleBoard />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
