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

  function AddForm({form, setForm, setShoppinglist}) {
    const handleChange = (e) => {

      const { name, value } = e.target
      setForm((prev) => ({...prev, [name]: value})
      )
    }

    const handleClick = (e)=>{
      e.preventDefault()
      const uniqId = crypto.randomUUID()
      setShoppinglist((prev) => ([...prev, {id:uniqId,...form}]))
      console.log(form)
    }

    return (
      <form className="addForm" onSubmit={handleClick}>
          <label htmlFor="item">Vare</label>
          <input id="item" type="text" name="item" placeholder="Havregryn" onChange={handleChange}/>
          <label htmlFor="quantity">Antall</label>
          <input id="quantity" type="number" min="1" max="100" name="quantity" placeholder="1" onChange={handleChange} />
          <button>Legg til vare</button>
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

  function ShoppingItem({title, content, id, setTodoList}){
    const handleClick = ()=>{
        setTodoList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return (
        <article className="todo-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>Done</button>
        </article>
    )
  }

  return (
    <>
      <Header />
      <main>
        <AddForm />
        <ShoppingList />
        <ShoppingItem />
      </main>
    </>
  )
}

export default App