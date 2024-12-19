
export const addToCartAction = (product) => {

    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}


export const removeFromCartAction = (product) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    }
}



export const incQAction = (product) => {

    return {
        type: 'INC_Q',
        payload: product
    }
}


export const decQAction = (product) => {

    return {
        type: 'DEC_Q',
        payload: product
    }
} 