import { useState } from "react"

export default function AddForm({form, setForm, setShoppinglist}) {
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