import Item from '../components/Item'

const ItemList = ({ product }) => {

  return (

    <div className='grid grid-cols-4 gap-5'>
      {product.map(item => <Item key={item.id} {...item} />)}
    </div>

  )
}

export default ItemList