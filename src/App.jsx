
function App() {
  const [count, setCount] = useState(0)

  function Header() {
    return (
      <header>
        <h1>Handleliste</h1>
      </header>
    )
  }

  function Main() {
    return (
      <main></main>
    )
  }

  return (
    <>
    <div id="container">
      <Header/>
    </div>
    </>
  )
}

export default App