import Post from './component'

function App() {

  const post = () => {
    return (
      <>
        <Post title="Ola testando... " idade={22} teste="teste" ola="ola" />
        <Post title="Ola testando 2 ... " idade={22} teste="234324" ola="cs"/>
        <Post title="Ola testando 43... " idade={22} teste="fsfs" ola="vh" />
      </>
    )
  }
  return (
    <div className="App">
      {post()}
    </div>
  )
}

export default App

