import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './CartButton.css'
import AppContext from '../../context/AppContext'

const CartButton = () => {

  const { cartItems, setIsCartVisible } = useContext(AppContext)

  return (
    <button
      type='button'
      className='cart__button'
      onClick={() => setIsCartVisible((value) => !value)}
    >
      <AiOutlineShoppingCart />
      {
        cartItems.length > 0
        && <span className='cart-status'>{cartItems.length}</span>
      }

    </button>
  )
}

export default CartButton