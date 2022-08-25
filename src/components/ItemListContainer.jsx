import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ItemList from './ItemList';
import { getProductsByCategory } from '../utils/helpers';
import { getProducts } from '../utils/helpers';


const ItemListContainer = () => {

    const [product, setProduct] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then((res) => setProduct(res))
            .catch((error) => alert(error));
    },
        [categoryId])

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