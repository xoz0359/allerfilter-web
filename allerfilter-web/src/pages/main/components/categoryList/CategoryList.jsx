import { useState, useEffect } from 'react';
import Category from './Category';
import RamenImage from '@/resources/images/category-ramen.png'


function Categories() {

    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8081/allerfilter/api/display-categories')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.resultCode === 'OK') {
                    setCategories(data.data)
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
        <div className="categories">
            {categories.map((category) => (
                <Category key={category.id} name={category.name} icon={RamenImage} />
            ))}
        </div>
    )
}
export default Categories