import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollNavigationMenu from './components/scroll-navigation-menu'
import { Footer } from './components/ui/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CallForPaper from './pages/CallForPaper'
import GuestLecturers from './pages/GuestLecturers'
import Gallery from './pages/Gallery'
import Test from './pages/Test'

function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToTarget = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer1 = setTimeout(scrollToTarget, 100);
        const timer2 = setTimeout(scrollToTarget, 400);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHashElement />
      <ScrollNavigationMenu />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/callforpaper" element={<CallForPaper />} />
          <Route path="/guestlecturers" element={<GuestLecturers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
