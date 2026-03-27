import '../ProductDetail.css'
function ProductContent({ product }) {
    return(
        <div className="product-info">
            <li className="product-info-flex">
                <span className="product-info-title">제조보고번호</span>
                <span className="product-info-content">{product.reportNumber}</span>
            </li>
            <li className="product-info-flex">
                <span className="product-info-title">제품명</span>
                <span className="product-info-content">{product.name}</span>
            </li>
            <li className="product-info-flex">
                <span className="product-info-title">카테고리</span>
                <span className="product-info-content">{product.category}</span>
            </li>
            <li className="product-info-flex">
                <span className="product-info-title">알레르기 정보</span>
                <span className="product-info-content">{product.allergen}</span>
            </li>
            <li className="product-info-flex">
                <span className="product-info-title">원재료</span>
                <span className="product-info-content">{product.rawMaterial}</span>
            </li>
            <li className="product-info-flex">
                <span className="product-info-title">제조사</span>
                <span className="product-info-content">{product.manufacturer}</span>
            </li>
            <li className="product-info-flex">
                <span className="product-info-title">수정일</span>
                <span className="product-info-content">{product.updatedAt}</span>
            </li>
        </div>       
    )
}
export default ProductContent