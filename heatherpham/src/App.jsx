import styles from './App.module.css'
import { About } from './components/About/About'
import { Activity } from './components/Activity/Activity'
import { Contact } from './components/Contact/Contact'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar'

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Activity/>
      <Contact/>
    </div>
  )
}

export default App
