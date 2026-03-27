import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ImprovementForm from './components/ImprovementForm'
import useProduct from '@/hooks/useProduct'

function DataImprovement() {

    const { productId } = useParams()
    const { product: fetchedProduct, loading, error } = useProduct(productId)
    const [product, setProduct] = useState({
        id: "",
        name: "",
        barcode: "",
        rawMaterial: "",
        allergen: ""
    })

    useEffect(() => {
        if (fetchedProduct) {
            setProduct(fetchedProduct)
        }
    }, [fetchedProduct])

    if (loading) return <div>로딩 중...</div>
    if (error) return <div>에러 발생</div>

    return (

        <div>
            <ImprovementForm product={product} />
        </div>
    )
} export default DataImprovement