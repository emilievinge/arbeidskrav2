import { useState } from "react"
import AddForm from "./components/AddForm"
import ShoppingList from "./components/ShoppingList"
import ShoppingItem from "./components/ShoppingItem"
import './style/layout.css'

function App() {



  return (
    <>
      <h1>Handleliste</h1>
      <main>
        <AddForm />
        <ShoppingList />
        <ShoppingItem />
      </main>
    </>
  )
}

export default App