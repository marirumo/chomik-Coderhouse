import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../utils/helpers';


const ItemDetailContainer = () => {

	const [item, setItem] = useState({})

	const { id } = useParams()


	useEffect(() => {
		getProductById(id)
			.then((res) => setItem(res))
			.catch((error) => alert(error));
	},
		[id]);


	return (
		<div className='bg-violet-100'>
			<ItemDetail {...item} />
		</div>
	);
}

export default ItemDetailContainer