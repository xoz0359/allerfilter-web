import { useState } from "react"
import '../Header.css'
function SearchBar({ onSearch }) {

    const [keyword, setKeyword] = useState("");

    const handleSearch = () => {
        const normalized = keyword
            .trim()
            .replace(/\s+/g, " ")
        if (!normalized) {
            return
        }
        setKeyword(normalized)
        onSearch(normalized)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (keyword !== "") {
                handleSearch()
            }
        }
    }

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="제품명을 입력하세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>
                검색
            </button>
        </div>
    )
}
export default SearchBar