import getOrderList from "../../data/Orderlist";
import { DELETE_ORDER, EDIT_ORDER } from "../types";

const initialState = {

    orderList: getOrderList()
}

function orderReducer(state = initialState, action) {
    let orderList;
    console.log(action.payload)
    switch(action.type){
        
        case DELETE_ORDER:
            orderList = [...state.orderList];
            orderList.splice(action.payload, 1);
            return {...state, orderList};

        case EDIT_ORDER: 
            orderList = [...state.orderList];
            orderList[action.payload.index] = action.payload.order;
            return {...state, orderList};

        default:
            return state;
    }
}

export default orderReducer;