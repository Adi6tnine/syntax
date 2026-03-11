import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Phases from './pages/Phases';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Host from './pages/Organizer';
import FAQ from './pages/FAQ';
import Register from './pages/Register';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    } else if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <Router>
      <ScrollToTop />
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-500/20 dark:selection:bg-blue-400/20 transition-colors duration-300">
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<EventDetails />} />
            <Route path="/phases" element={<Phases />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/organizer" element={<Host />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
