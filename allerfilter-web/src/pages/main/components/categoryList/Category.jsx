function Category(props) {
    return(
        <div className="category">
            <img src={props.icon} />
            <span>{props.name}</span>
        </div>
    )
}
export default Category;