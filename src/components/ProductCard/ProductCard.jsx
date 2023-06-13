import React from 'react'
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'

import './ProductCard.css'
import formatcurrency from '../../utils/formatCurrency'

const ProductCard = ({ data }) => {
  const { title, price, thumbnail } = data

  return (
    <section className='product-card'>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className='card__image'

      />
      <div className='card__infos'>
        <h2 className='card__price'>{formatcurrency(price, 'BRL')}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>
      <button type='button' className='button__add-cart'>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired