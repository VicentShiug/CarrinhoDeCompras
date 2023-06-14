import React, { useContext } from 'react'
import './CartItem.css'
import propTypes from 'prop-types'
import { BsCartDashFill } from 'react-icons/bs'
import formatcurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

const CartItem = ({ data }) => {

  const { thumbnail, title, price, id } = data

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleRemoveCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedItems)
  }

  return (
    <section className='cart-item'>
      <img
        src={thumbnail}
        alt="imagem do produto"
        className='cart-item-image'
      />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatcurrency(price, 'BRL')}</h3>
        <button
          type='button'
          className='button__remove-item'
          onClick={() => handleRemoveCart(id)}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object
}.isRequired