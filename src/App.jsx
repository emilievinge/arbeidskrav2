import { useState } from "react"
import AddForm from "./components/AddForm"
import ShoppingList from "./components/ShoppingList"
import ShoppingItem from "./components/ShoppingItem"
import './style/layout.css'

// Er klar over at oppgaven mangler punkter, men vi har flere arbeidskrav som krevde det vi hadde.

function App() {

  const defaultItems = [
    {
      id: 0,
      name: "Capri Sun",
      quantity: 4
    },
    {
      id: 1,
      name: "Fanta",
      quantity: 2
    }
  ]

  const [shoppingList, setShoppinglist] = useState(defaultItems)
  const [items, setItems] = useState()

  return (
    <>
      <h1>Handleliste</h1>
      <main>
        <AddForm items={items} setItems={setItems} setShoppinglist={setShoppinglist} />
        <ShoppingList shoppingListItems={shoppingList} setShoppinglist={setShoppinglist} />
       
      </main>
    </>
  )
}

export default App