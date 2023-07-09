import getCategoryList from "../../data/CategoryList";

const initialState = {

    categoryList: getCategoryList()
}

function categoryReducer(state = initialState, action) {

    switch(action.type) {
 
        case 'ADD_NEW_CATEGORY': 
            let categoryList = [...state.categoryList]
            categoryList.push(action.payload)
            return { ...state, categoryList };
        
        default: 
           return state;
    }
}

export default categoryReducer;