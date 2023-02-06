import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Rafael Pablo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur dicta voluptate sapiente id vel beatae facere tempore natus architecto, eaque praesentium libero temporibus, quasi nisi laudantium ducimus, voluptas esse."
          />
          <Post
            author="Kelly Eduarda"
            content="Teste de post."
          />
        </main>
      </div>
    </>
  )
}

export default App
