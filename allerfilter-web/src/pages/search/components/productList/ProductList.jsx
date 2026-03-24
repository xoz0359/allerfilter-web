import Product from './Product'
function ProductList(props) {
    return (
        <div className="product-list">
            {props.data.map((product) => (
                <Product
                    key={product.id}
                    data={product}
                />
            ))}
        </div>
    )
}
export default ProductList