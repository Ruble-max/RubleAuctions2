/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Auctions from './pages/Auctions';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import HowItWorks from './pages/HowItWorks';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            {/* Placeholders for other routes */}
            <Route path="*" element={<div className="py-32 text-center font-bold text-2xl text-slate-500">Page Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}
