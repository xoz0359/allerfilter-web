import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MainImage from './components/MainImage'
import ProductInfo from './components/ProductInfo'
import DataImprovement from './components/DataImprovement'
import useProduct from '@/hooks/useProduct'


function ProductDetail() {

    const { productId } = useParams()

    const { product, loading, error } = useProduct(productId)

    if (loading) return <div className="loading">로딩 중...</div>

    if (error) return <div>에러 발생</div>
             
    return (
        <div className="product-detail">
            <MainImage data={product.id} />
            <ProductInfo product={product} />
            <DataImprovement product={product} />
        </div>
    )
}
export default ProductDetail