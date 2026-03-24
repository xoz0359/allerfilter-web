function Pagination(props) {
    const currentPage = props.page
    const pageSize = props.size
    const capacity = props.capacity
    const totalPage = Math.ceil(props.total / pageSize)

    const currentGroup = Math.floor((currentPage - 1) / capacity)
    const lastGroup = Math.floor((totalPage - 1) / capacity)

    const length = currentGroup === lastGroup ? (totalPage % capacity || capacity) : capacity
    const pages = Array.from({ length }, (_, i) => Math.max(currentGroup * capacity + 1, 1) + i)

    return (
        <div className="pagination">
            <button
                disabled={currentPage === 1}
                onClick={() => props.onChange(Math.max(currentPage - capacity, 1))}
            >
                이전
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => props.onChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === totalPage}
                onClick={() => props.onChange(Math.min(currentPage + capacity, totalPage))}
            >
                다음
            </button>
        </div>
    )
}
export default Pagination