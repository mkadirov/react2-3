import getFoodListData, { categoryList } from "../../data/FoodListData";
import getUserList from "../../data/Users";

 
const initialState = {

    
    userList: getUserList(),
    
    
}

function userReducer(state = initialState, action) {
    
    switch(action.type) {

        

        case 'EDIT_USER':
            let editList = [...state.userList];
               editList[action.payload.index].roll = action.payload.roll;
            return {...state, userList: editList};
        
        case 'DELETE_USER':
            let userList = [...state.userList];
            userList.splice(action.payload, 1);
            return {...state, userList};
        
        default: 
           return state;
    }

}

export default userReducer;