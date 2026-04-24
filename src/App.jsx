import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pillars from './pages/Pillars.jsx'
import Founder from './pages/Founder.jsx'
import Gallery from './pages/Gallery.jsx'
import Athletes from './pages/Athletes.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
