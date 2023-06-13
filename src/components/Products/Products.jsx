import React, { useState, useEffect } from 'react'
import fetchProducts from '../../api/fetchProducts'
import './Products.css'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'

const Products = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])


  return (
    (
      loading ? <Loading /> :
        <section className='products container'>
          {
            products.map((item) => <ProductCard key={item.id} data={item} />)
          }
        </section>
    )

  )
}

export default Products