export default function ShoppingItem({id, name, quantity, setShoppingItem}){
    const handleClick = ()=>{
        setShoppingItem((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return (
      <>
        <li>
          <input id="checkbox" type="checkbox" defaultChecked />
          <label htmlFor="checkbox">{name}</label>
            <input type="number" min="1" max="99" placeholder="1" />
        </li>
      </>
    )
  }