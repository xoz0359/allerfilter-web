import { useState } from "react"
import '../Search.css'

function AllergenFilter() {

    const [allergenFilters, setAllergenFilters] = useState([
        { id: 1, name: "돼지고기" },
        { id: 2, name: "소고기" },
        { id: 3, name: "우유" },
        { id: 4, name: "새우" },
        { id: 5, name: "계란" }
    ]);

    return(
        <div className="allergen-filter">
            {allergenFilters.map((filter) => (
                <div key={filter.id}>
                    {filter.name}
                </div>
            ))}
        </div>
    )
}
export default AllergenFilter