import { useState } from "react"
import AddForm from "./components/AddForm"
import ShoppingList from "./components/ShoppingList"
import ShoppingItem from "./components/ShoppingItem"
import './style/layout.css'

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

  const useState = {defaultItems}

  return (
    <>
      <h1>Handleliste</h1>
      <main>
        <AddForm />
        <ShoppingList />
        <ShoppingItem  />
      </main>
    </>
  )
}

export default App