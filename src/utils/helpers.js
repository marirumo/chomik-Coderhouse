import { ITEMS } from './data'

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ITEMS)
            reject(new Error("Error en el get"))
        }, 200);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        let getList = ITEMS.filter((elem) => elem.category === categoryId);

        getList
            ? resolve(getList)
            : reject(new Error("Error en el filter"));
    });
}


export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        let getItem = ITEMS.find((elem) => elem.id === id);

        getItem
            ? resolve(getItem)
            : reject(new Error("Error en el find"));
    });
}
