import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AllergenFilter from './components/AllergenFilter'
import ProductList from './components/productList/ProductList'
import Pagination from './components/pagination/Pagination'
import { Constants } from '@/resources/Constants'
function Search() {

    const [searchParams, setSearchParams] = useSearchParams()

    const keyword = searchParams.get("keyword")
    const page = Number(searchParams.get("page") || 1)

    const [contents, setContents] = useState([])

    const [pagination, setPagination] = useState({
        size: Constants.DEFAULT_SIZE,
        total: Constants.DEFAULT_TOTAL_COUNT,
        capacity: Constants.DEFAULT_PAGINATION_CAPACITY
    })

    const handlePageChange = (newPage) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", newPage)
        setSearchParams(params)
    }

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)

        const param = new URLSearchParams({
            keyword: keyword,
            pageNo: page,
            pageSize: pagination.size
        })
        fetch(`http://localhost:8081/allerfilter/api/products?${param}`)
            .then(res => res.json())
            .then(data => {
                if (data.resultCode === 'OK') {
                    console.log("totalCnt: ", data.total)
                    console.log("제품 리스트: ", data.data)
                    setContents(data.data)
                    setPagination(prev => ({
                        ...prev,
                        size: data.size,
                        total: data.total
                    }))
                } else {
                    console.error(data.message)
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)

            })

    }, [keyword, page])

    if (loading) {
        return (
            <div className="loading">로딩 중...</div>
        )
    }
    return (
        <div>
            <AllergenFilter />
            {pagination.total > 0 ? (
                <>
                    <ProductList data={contents} />
                    <Pagination page={page}
                        size={pagination.size}
                        total={pagination.total}
                        capacity={pagination.capacity}
                        onChange={handlePageChange}
                    />
                </>
            ) : (
                <div>검색 결과가 없습니다</div>
            )}
        </div>
    )
}
export default Search