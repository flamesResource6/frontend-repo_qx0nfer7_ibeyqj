import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import CodeShowcase from './components/CodeShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <CodeShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
