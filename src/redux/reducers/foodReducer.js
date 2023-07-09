import getFoodListData from "../../data/FoodListData";

const initialState = {
    foodList: getFoodListData()
}

function foodReducer(state = initialState, action) {

    switch(action.type){
        case 'ADD_NEW_FOOD': 
            let foodList = [...state.foodList]
            foodList.push(action.payload)
            return { ...state, foodList };
        
        default:
            return state
    }
}

export default foodReducer;