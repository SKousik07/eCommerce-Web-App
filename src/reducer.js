export const initialState={
    cart:[],
    user:null,
    fdata:[]
}


function reducer(state,action){
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_CART":
                
                let newCart=[...state.cart]
                let index=state.cart.findIndex((item)=> item.title=== action.item.title)
                if (index>=0){
                newCart[index].quantity=action.item.quantity+1
                return {
                    ...state,
                    cart: newCart
                }
                }
                else{
                    action.item.quantity=action.item.quantity+1
                    return {
                        ...state,
                        cart:[...state.cart, action.item]
                    }
                }
        
        case "REMOVE_FROM_CART":
            if(action.item.quantity===1){
            let newCart=[...state.cart]
            let index=state.cart.findIndex((item)=> item.title=== action.item.title)
            if (index>=0){
                newCart.splice(index,1);
            }
            return {...state,cart:newCart}
           }
           else{
            console.log(action.item)
            let newCart=[...state.cart]
            let index=state.cart.findIndex((item)=> item.title=== action.item.title)

            newCart[index].quantity=action.item.quantity-1
            return {
                ...state,
                cart: newCart
            }
           }
        case "REMOVE_ENTIRE_FROM_CART":
            let removeCart=[...state.cart]
            let ind=state.cart.findIndex((item)=> item.title=== action.item.title)
            if (ind>=0){
                removeCart.splice(ind,1);
            }
            return {...state,cart:removeCart}
        case "ADD_DATA":
            return {
                ...state,fdata: [...action.item]
            }
        default:
            return state
    }
}

export default reducer;