import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainImage from './components/MainImage'
import ProductInfo from './components/ProductInfo'
import DataImprovement from './components/DataImprovement'

function ProductDetail() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8081/allerfilter/api/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                if (data.resultCode === 'OK') {
                    setProduct(data.data)
                } else {
                    console.error(data.message)
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err.message)
                setLoading(false)
            })
    }, [productId])
    if (!product) {
        return (
            <div className="loading">로딩 중...</div>
        )
    }
    return (
        <div className="product-detail">
            <MainImage data={product.id} />
            <ProductInfo data={product} />
            <DataImprovement data={product} />
        </div>
    )
}
export default ProductDetail