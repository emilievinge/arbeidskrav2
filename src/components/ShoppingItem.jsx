

export default function ShoppingItem({id, setShoppingItem}){
    const handleClick = ()=>{
        setShoppingItem((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return (
      <>
        <li>
          <input id="checkbox" type="checkbox" defaultChecked />
          <label htmlFor="checkbox">Melk</label>
          <input type="number" min="1" max="99" placeholder="1" />
        </li>
        <li>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Egg</label>
          <input type="number" min="1" max="99" placeholder="1" />
        </li>
      </>
    )
  }