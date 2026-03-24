import { Link } from "react-router-dom"
function Product(props) {
    return (
        <div className="product">
            <Link to={`/products/${props.data.id}`}>제품 이미지</Link>
            <table>
                <thead>
                    <tr>
                        <th>제조보고번호</th>
                        <th>제품명</th>
                        <th>카테고리</th>
                        <th>알레르기</th>
                        <th>원재료</th>
                        <th>바코드</th>
                        <th>제조사</th>
                        <th>최종수정일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.data.reportNumber}</td>
                        <td>{props.data.name}</td>
                        <td>{props.data.category}</td>
                        <td>{props.data.allergen}</td>
                        <td>{props.data.rawMaterial}</td>
                        <td>{props.data.barcode}</td>
                        <td>{props.data.manufacturer}</td>
                        <td>{props.data.updatedAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Product