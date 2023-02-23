import React, { useId } from 'react'


function Scart() {
  const shoppingCartID = useId()
  
  return (
    <>
      <label  htmlFor={shoppingCartID}>
        {/* <ShoppingCart></ShoppingCart> */}
      </label>
      <input id={shoppingCartID} type="checkbox" hidden></input>
      <aside className='cart'>
        <ul>
          <li>
            <p>product</p>
            <footer>
              <small>quantity</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>  </button>
      </aside>
    </>
  )
}

export default Scart