export const itemCount = (cartItems) => {
    const count = cartItems.reduce(
        (total, product) => total + product.quantity,
        0
    );
    return count;
};

export const sumTotal = (cartItems) => {
    return cartItems
        .reduce((total, product) => total + product.precio * product.quantity, 0)
        .toFixed(2);
};

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.cartItems.find((item) => item.id === action.payload.id)){
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            let rtn = {
                ...state,
                itemCount: itemCount(state.cartItems),
                total: sumTotal(state.cartItems),
                cartItems: [...state.cartItems]
            }; console.log(rtn);
            return rtn;
        case "REMOVE_ITEM":
            const newCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                itemCount: itemCount(newCartItems),
                total: sumTotal(newCartItems),
                cartItems: [
                    ...state.cartItems.filter((item) => item.id !== action.payload.id)
                ]    
            };
        case "INCREASE":
            const newStateCartItems = {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if(item.id === action.payload.id){
                        return { ...item, quantity: item.quantity + 1};
                    }else {
                        return item;
                    }
                })
            };
            const newState = {
                ...newStateCartItems,
                itemCount: itemCount(newStateCartItems.cartItems),
                total: sumTotal(newStateCartItems.cartItems)
            };
            return newState;
        case "DECREASE":
            const newcartItemsInDecrease = {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if(item.id === action.payload.id){
                        return { ...item, quantity: item.quantity - 1};
                    }else {
                        return item;
                    }
                })
            };
            return {
                ...newcartItemsInDecrease,
                itemCount: itemCount(newcartItemsInDecrease.cartItems),
                total: sumTotal(newcartItemsInDecrease.cartItems)
            };
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                itemCount: 0,
                total: 0.0
            };
        case "CLEAR":
            return{
                cartItems: [],
                checkout: false,
                itemCount: 0,
                total: 0.0
            };
        default:
            return state;
    }
};