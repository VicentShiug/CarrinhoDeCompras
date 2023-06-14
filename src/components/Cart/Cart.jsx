import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'
import formatcurrency from '../../utils/formatCurrency'

const Cart = () => {

  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price, 0
  )

  return (
    <section className={`cart ${isCartVisible && 'cart--active'}`}>
      <div className='cart-items'>
        {cartItems.map((item) => <CartItem key={item.id} data={item} />)}
      </div>

      <div className='cart-resume'>
        {formatcurrency(totalPrice, 'BRL')}
      </div>
    </section>
  )
}

export default Cart