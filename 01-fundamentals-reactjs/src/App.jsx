import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

function App() {

  return (
    <>
    <Header />
      <Post
        author="Rafael Pablo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur dicta voluptate sapiente id vel beatae facere tempore natus architecto, eaque praesentium libero temporibus, quasi nisi laudantium ducimus, voluptas esse."
      />
      <Post
        author="Kelly Eduarda"
        content="Teste de post."
      />
    </>
  )
}

export default App
