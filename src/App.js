import React from 'react'
import './App.css'
import About from './components/About'
import Navigation from './components/Navigation'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'


function App() {
    return (
        <div className='App'>
            <Navigation />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Contact />
        </div>
    );
}

export default App;
