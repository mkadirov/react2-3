import getFoodListData, { categoryList } from "../data/FoodListData";
import getUserList from "../data/Users";

 
const initialState = {

    foodList: getFoodListData(),
    userList: getUserList(),
    categorylist: categoryList
    
}

function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {

        case 'ADD_NEW_FOOD': 
           let foodList = [...state.foodList]
           foodList.push(action.payload)
           return { ...state, foodList };

        case 'EDIT_USER':
            let editList = [...state.userList];
               editList[action.payload.index].roll = action.payload.roll;
            return {...state, userList: editList};
        
        case 'DELETE_USER':
            let userList = [...state.userList];
            userList.splice(action.payload, 1);
            return {...state, userList};
        
        case 'ADD_NEW_CATEGORY': 
            let categoryList = [...state.categorylist]
            categoryList.push(action.payload)
            return { ...state, categoryList };
        
        default: 
           return state;
    }

}

export default reducer;