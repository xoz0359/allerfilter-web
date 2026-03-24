import Banner from './components/Banner'
import CategoryList from './components/categoryList/CategoryList'
import Stats from './components/Stats'
import DataImprovement from './components/DataImprovement'

function Main() {
    return (
        <div className="contianer">
            <Banner />
            <CategoryList />
            <Stats />
            <DataImprovement />
        </div>
    )
}
export default Main