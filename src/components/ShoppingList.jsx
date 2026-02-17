export default function ShoppingList({items, id, setShoppinglist}) {

    return (
        <section>
            <h2>Varer</h2>
            <ul>
              {items.map(i => <ShoppingItem key={i.id} id={i.id} setShoppinglist={setShoppinglist} />)}
            </ul>
        </section>
    )
}