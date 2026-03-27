import { Link } from "react-router-dom"
function DataImprovement({ product }) {
    return (
        <div className="data-improvement">
            <Link to={`/data-improvement/${product.id}`}>
                데이터 개선 참여하기
            </Link>
        </div>
    )
}
export default DataImprovement