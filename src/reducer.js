const initialState = {
    redirectToHome: false,
    items: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLICK_ADD":
            return {
                ...state,
                redirectToHome: true,
                items: [...state.items, action.item],
            }
        case "RESET_STATUS":
            return {
                ...state,
                redirectToHome: false,
            }
        case "DELETE_GRADIENT":
            return {
                ...state,
                items: state.items.filter((item, id) => id !== action.id),
            }
        case "CLICK_EDIT":
            return {
                ...state,
                items: state.items.map((item, idx) => {
                    if(idx.toString() === action.id) {
                        return action.item;
                    }

                    return item;
                }),
                redirectToHome: true,
            }
        default:
            return state;
    }
}
export default reducer;