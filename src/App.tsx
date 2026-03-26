import './i18n'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Units    from './components/Units'
import Coverage from './components/Coverage'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
 
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Units />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
 