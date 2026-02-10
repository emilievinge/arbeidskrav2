import { useState } from "react"
import './style/layout.css'

function App() {
  const [count, setCount] = useState(0)


  function Header() {
    return (
      <header>
        <h1>Handleliste</h1>
      </header>
    )
  }

  function AddForm() {
    return(
      <form>
        <label htmlFor="item">Vare</label>
        <input id="item" type="text" placeholder="Havregryn" />
        <label htmlFor="quantity">Antall</label>
        <input id="quantity" type="number" min="1" max="100" placeholder="1" />
        <button id="addItem">Legg til vare</button>
      </form>
    )
  }

  function ShoppingList() {
    return(
      <ul>
        <li>
          <input id="checkbox" type="checkbox" checked />
          <label htmlFor="checkbox">Melk</label>
          <input type="number" min="1" max="100" placeholder="1" />
        </li>
        <li>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Egg</label>
          <input type="number" min="1" max="100" placeholder="1" />
        </li>
      </ul> 
    )
  }

  return (
    <>
      <Header />
      <main>
        <AddForm />
        <ShoppingList />
        
      </main>
    </>
  )
}

export default App