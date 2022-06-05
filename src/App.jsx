import {Header} from './components/Header';
import "./styles/global.css"
import styles from './App.module.css'

import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';


function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post name="Eduardo " article="Minim irure tempor ea do labore amet est. Est cupidatat duis duis Lorem incididunt voluptate consectetur. Occaecat cillum sit cillum et excepteur dolore irure. Elit excepteur et do exercitation quis. Incididunt ea in deserunt sint cupidatat proident sit ex aliqua nisi. Magna commodo eu voluptate aliqua tempor minim ullamco eu sunt in irure ut est. Deserunt irure deserunt sunt nulla exercitation incididunt exercitation fugiat." />
        </main>
      </div>
    </div>
  )
}

export default App

