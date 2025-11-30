import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import HackathonProjects from './components/HackathonProjects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans selection:bg-green-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <HackathonProjects />
        <Contact />
      </main>
      <footer className="bg-gray-950 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Aneesh</p>
      </footer>
    </div>
  )
}

export default App
