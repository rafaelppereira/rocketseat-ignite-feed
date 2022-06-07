import { Plus } from "phosphor-react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './styles/App.module.css';
import './styles/global.css';

const postsDefault = [
  {
    id: 'e13da59d-a0b7-486d-a7ad-d8459f96351e',
    author: {
      avatarUrl: 'https://github.com/rafaelppereira.png',
      name: 'Rafael Pereira',
      role: 'CTO outspace',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 'd2556617-9e7e-411b-b672-1b0701df7018',
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

function App() {
  const [posts, setPosts] = useState(postsDefault);

  function handleAddNewPost() {
    setPosts([...posts, {
      id: 'e13da59d-a0b7-486d-a7ad-d8459f96351e',
      author: {
        avatarUrl: 'https://github.com/rafaelppereira.png',
        name: 'Rafael Pereira',
        role: 'CTO outspace',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date(),
    }])
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        

          <button 
            className={styles.addNewPostButton} 
            type="button"
            title="Adicionar um novo post"
            onClick={handleAddNewPost}
          >
            <Plus size={24} />
          </button>
        </main>
    
      </div>
    </>
  )
}

export default App;
