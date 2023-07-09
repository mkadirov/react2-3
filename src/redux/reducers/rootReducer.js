import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    food: foodReducer,
    category: categoryReducer,
    users: userReducer,
    order: orderReducer
})

export default rootReducer;