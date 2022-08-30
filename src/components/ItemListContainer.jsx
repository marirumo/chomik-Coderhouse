import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemList from './ItemList';
import firestoreDB from '../services/config';
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

    const [product, setProduct] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {

        const itemsCollection = collection(firestoreDB, 'hamstershop');
       
		if (categoryId) {
			const queryFilter = query(
				itemsCollection,
				where("category", "==", categoryId),
			);
			
			getDocs(queryFilter)
			.then((res) =>
				setProduct(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(itemsCollection)
			.then((res) =>
				setProduct(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoryId]);


    return (

        <>
            <main className='bg-violet-100 relative flex min-h-screen flex-col items-center justify-center space-y-3 p-8'>

                <div>
                    <ItemList product={product} />

                </div>

            </main>
        </>

    )
}

export default ItemListContainer