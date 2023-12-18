
import { About } from './about/About';
import { Footer } from './footer/Footer';
import { Navbar } from './navbar/Navbar';
import styles from './page.module.css'
import { Project } from './project/Project';
import { Skills } from './skills/Skills';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <About/>
      <Project/>
      <Skills/>
      <Footer/>
    </main>
  )
}

export default Home;