import ItemDetail from '../pages/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import firestoreDB from '../services/config';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const ref = doc(firestoreDB, 'hamstershop', id)
        getDoc(ref).then((response) => {
            setLoading(false)
            setProductDetail({
                id: response.id,
                ...response.data(),
            })
        })
    }, [id])

    return (
        loading ?
            <span>Cargando...</span>
            :
            <div><ItemDetail {...productDetail} /></div>
    )
}

export default ItemDetailContainer
