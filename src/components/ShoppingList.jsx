import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({shoppingListItems, setShoppinglist}) {

    return (
        <section>
            <h2>Varer</h2>
            <ul>
              {shoppingListItems.map((item) => <ShoppingItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} setShoppinglist={setShoppinglist} />)}
            </ul>
        </section>
    )
}