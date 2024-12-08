import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import LandingPage from './components/Landing_page'
import Menu from './components/Menu'
import About from './components/About'
import BookTable from './components/BookTable'
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { CartProvider } from './components/CartContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router>
  <CartProvider>
  <Navbar/>
  <Routes>
    <Route path="" element={<LandingPage />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<About/>} />
    <Route path="/Menu" element={<Menu/>} />
    <Route path="/BookTable" element={<BookTable/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
  </CartProvider>
</Router>
  </StrictMode>,
)
