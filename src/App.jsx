import './global.css'
import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Davi Oliveira"
            content="Lorem ipsum dolor sit amet"
          />
          <Post
            author="Diego Fernandes"
            content="Um novo post"
          />
        </main>
      </div>
    </>
  )
}

export default App
