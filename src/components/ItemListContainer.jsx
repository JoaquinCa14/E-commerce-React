import Card from "./Card"

const ItemListContainer = ({ greeting, productos }) => {
    return (
        <div>
            {greeting}
            {productos.map(producto => <Card nombre={producto.nombre} precio={producto.precio} />)}
        </div>
    )
}

export default ItemListContainer