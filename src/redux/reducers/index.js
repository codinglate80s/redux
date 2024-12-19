import products from '../../data.json';
const INIT_STATE = {
    cart: [],
    cartTotal: 0,
    products
}



const returnCartTotals = (newCart) => newCart.reduce((a, b) => a + b.price * b.quantity, 0)
const AddToCartReducer = (state, payload) => {
    const newCart = handleAddCartQuantity(state.cart, payload)
    console.log(newCart, 'From Cart');

    return {
        ...state,
        cart: newCart,
        cartTotal: state.cartTotal + payload.price
    }
}


const removeFromCartReducer = (state, payload) => {

    let newCart = [...state.cart]
    newCart = newCart.filter(product => product.name !== payload)

    return {
        ...state,
        cart: newCart,
        cartTotal: returnCartTotals(newCart)
    }


}


export const incQReducer = (state, payload) => {

    let newCart = [...state]
    // PRODUCT_INDEX > -1 : greter than -1  if index not esist so its value will be -1 
    const PRODUCT_INDEX = newCart.findIndex(product => product.name == payload.name)
    if (PRODUCT_INDEX) {



        newCart = newCart.map(product => {
            if (product.name == payload.name) {
                return { ...product, quantity: product.quantity + 1 }
            }
            // we return product so we not do mutation for newCart
            return product
        })



    }

    return {
        ...state,
        cart: newCart,
        cartTotal: returnCartTotals(newCart)
    }

}

export const decQReducer = (state, payload) => {

    let newCart = [...state]

    const PRODUCT_INDEX = newCart.findIndex(product => product.name == payload.name)
    if (PRODUCT_INDEX) {


        let pq = false;
        let pn = ''

        newCart = newCart.map(product => {
            if (product.name == payload.name) {
                if (product.quantity != 0) {
                    return { ...product, quantity: product.quantity - 1 }
                }
            }
            if (product.quantity <= 0) {
                pq = true;
            }
            // we return product so we not do mutation for newCart
            return product
        })

        if (pq) {
            newCart = newCart.filter(p => p.quantity > 0)
        }


    }




    return {
        ...state,
        cart: newCart,
        cartTotal: returnCartTotals(newCart)
    }
}





const rootReducer = (state = INIT_STATE, action) => {

    const { type, payload } = action
    switch (type) {
        case 'ADD_TO_CART':
            return AddToCartReducer(state, payload)
        case 'REMOVE_FROM_CART':
            return removeFromCartReducer(state, payload)
        case 'INC_Q':
            return incQReducer(state.cart, payload)
        case 'DEC_Q':
            return decQReducer(state.cart, payload)
        default:
            return state;
    }


}


// const rootReducer = (state = INIT_STATE, action) => {
//     const { type, payload } = action
//     if (type === 'ADD_TO_CART') {


//         const newCart = handleAddCartQuantity(state.cart, payload)
//         console.log(newCart, 'From Cart');

//         return {
//             ...state,
//             cart: newCart,
//             cartTotal: state.cartTotal + payload.price
//         }

//     } else if (type === 'REMOVE_FROM_CART') {

//         const newCarts = handleRemoveCart(state.cart, payload)
//         return {
//             ...state,
//             cart: newCarts,
//             cartTotal: state.cartTotal !== 0 ? state.cartTotal - payload.price : 0
//         }
//     } else {
//         return {
//             ...state
//         }
//     }

// }


const handleRemoveCart = (state, payload) => {

    let newCart = [...state]
    // PRODUCT_INDEX > -1 : greter than -1  if index not esist so its value will be -1 
    const PRODUCT_INDEX = newCart.findIndex(product => product.name == payload.name)
    if (PRODUCT_INDEX) {



        newCart = newCart.map(product => {
            if (product.name == payload.name) {
                return { ...product, quantity: product.quantity - 1 }
            }
            // we return product so we not do mutation for newCart
            return product
        })



    }

    // issue : we muatet state down 
    // newCart[PRODUCT_INDEX].quantity += 1

    // on this stats : i only take refrnce from state cart
    // this array behiver is in memory  same not  -> mutate state directly 
    // const newCart = cart
    console.log(newCart);

    return newCart


}

const handleAddCartQuantity = (state, payload) => {

    // shallow copy from the cart array or object 
    // with new instince in memory 
    let newCart = [...state]

    // PRODUCT_INDEX > -1 : greter than -1  if index not esist so its value will be -1 
    const PRODUCT_INDEX = newCart.findIndex(product => product.name === payload.name)

    if (PRODUCT_INDEX <= -1) {
        newCart = newCart.concat({ ...payload, quantity: 1 })
    } else {

        newCart = newCart.map(product => {
            if (product.name == payload.name) {
                return { ...product, quantity: product.quantity + 1 }
            }
            // we return product so we not do mutation for newCart
            return product
        })


        // issue : we muatet state down 
        // newCart[PRODUCT_INDEX].quantity += 1
    }
    // on this stats : i only take refrnce from state cart
    // this array behiver is in memory  same not  -> mutate state directly 
    // const newCart = cart

    return newCart


}
export default rootReducer