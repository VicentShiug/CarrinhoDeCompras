import React, { useState, useEffect } from 'react'
import fetchProducts from '../../api/fetchProducts'
import './Products.css'
import ProductCard from '../ProductCard/ProductCard'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
    })
  }, [])


  return (
    <section className='products container'>
      {
        products.map((item) => <ProductCard key={item.id} data={item} />)
      }
    </section>
  )
}

export default Products