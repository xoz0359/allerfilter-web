import { useState, useEffect } from 'react'
function Stats() {

    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams({
            isActive: true,
            hasBarcode: true
        })
        fetch(`http://localhost:8081/allerfilter/api/products/count?${params}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.resultCode === 'OK') {
                    setCount(data.data)
                } else {
                    console.error(data.message)
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })

    }, [])

    return (
        <div className="stats">
            {loading ? '로딩 중...' : `관리 중인 제품 수: ${count}`}
        </div>
    )
}
export default Stats