import { useState, useEffect } from 'react'

function useProduct(productId) {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if (!productId) {
            setLoading(false)
            return
        }

        const fetchProduct = async () => {
            try {
                setLoading(true)

                const response = await fetch(`http://localhost:8081/allerfilter/api/products/${productId}`)
                if (!response.ok) throw new Error("상품 조회 실패")
                const data = await response.json()
                setProduct(data.data)
            }catch (e) {
                setError(e)
            }finally{
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId])

    return { product, loading, error }

}

export default useProduct