
export const initialState = {
    cart: [
        // "id": "1",
        // "titleText": "Tamima",
        // "descText": "this is desc1",


        // "img": "https://picsum.photos/170"
    ],
    user: null,
};

function reducer(state, action) {
    // console.log(action);
    switch (action.type) {
        case 'Add_To_Cart':
            //logic for adding item on cart
            return {
                ...state,
                cart: [...state.cart, action.item],
            }

        case 'Remove_From_Cart':
            //logic for removing item on cart

            // we clone the cart
            let newCart = [...state.cart];
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            if (index >= 0) {
                //item exists in basket , remove it
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as it not in cart `
                )
            }
            return { ...state, cart: newCart };

        default:
            return state;
    }
}

export default reducer;