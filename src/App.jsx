import { Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import ProjectParent from './components/projects/ProjectParent.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Fotter from './components/Fotter/Fotter.jsx'
import ScrollToTop from './components/scroll/scroll.jsx'
import SocialIcons from './components/Floating Social Icons/SocialIcons.jsx'


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectParent />} />
      </Routes>

      <SocialIcons />
      <Fotter />
    </>
  )
}

export default App