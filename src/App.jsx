import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SoundproofBooth from './pages/SoundproofBooth';
import ProductDetail from './pages/ProductDetail';
import PaddleBoard from './pages/PaddleBoard';
import ScreenExtender from './pages/ScreenExtender';
import ScreenExtenderProduct from './pages/ScreenExtenderProduct';
import AiSolutions from './pages/AiSolutions';
import Catering from './pages/Catering';
import ExpoStand from './pages/ExpoStand';
import Printing from './pages/Printing';
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
        <Route path="/ai-solutions" element={<AiSolutions />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/expo-stand" element={<ExpoStand />} />
        <Route path="/printing" element={<Printing />} />
        {/* Dedicated pages — must be before the generic :slug route */}
        <Route path="/products/paddle-board" element={<PaddleBoard />} />
        <Route path="/products/screen-extender" element={<ScreenExtender />} />
        <Route path="/products/screen-extender/:model" element={<ScreenExtenderProduct />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
