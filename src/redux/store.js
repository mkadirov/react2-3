import {createStore, applyMiddleware} from "redux"
import reducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const dispatch = store.dispatch;
export {dispatch};

export default store