import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/KellyKaster.png',
      name: 'Kelly Kaster',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-11 07:16:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/karlphillip.png',
      name: 'Karl Phillip',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-10 07:20:00'),
  },
];

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
