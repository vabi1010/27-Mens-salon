import './App.css'
import { useState } from 'react'
import { navigation } from './data/salonData'
import { About, Appointment, Contact, Footer, Gallery, Header, Hero, Offer, Pricing, Services, Team, Testimonials, WhyUs } from './components/SalonSections'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="site"><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigation={navigation} /><main><Hero /><About /><Services /><Pricing /><WhyUs /><Gallery /><Team /><Testimonials /><Offer /><Appointment /><Contact /></main><Footer /></div>
}

export default App
