import styles from './App.module.css'
import { About } from './components/About/About'
import { Activity } from './components/Activity/Activity'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar'

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Activity/>
    </div>
  )
}

export default App
