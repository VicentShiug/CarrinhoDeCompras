import React, { useEffect, useContext } from 'react'
import fetchProducts from '../../api/fetchProducts'
import './Products.css'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('Inicio').then((response) => {
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