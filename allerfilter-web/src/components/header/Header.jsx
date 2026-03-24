import { Link, useNavigate } from "react-router-dom"
import './Header.css'
import SearchBar from "./module/SearchBar"
import Menu from "./module/Menu"
import Logo from "./module/Logo"

function Header() {

    const navigate = useNavigate()

    const handleSearch = (keyword) => {
        navigate({
            pathname: "/search",
            search: `?keyword=${keyword}&page=1`
        })
    }

    return (
        <header className="header">

            <div className="logo">
                <Link to="/"><Logo /></Link>
            </div>

            <SearchBar onSearch={handleSearch} />

            <Menu></Menu>

        </header>

    )
}

export default Header