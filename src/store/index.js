import { createStore, combineReducers } from "redux";
import openReducer from "./open/open.reducer";


const rootReducer = combineReducers({
    open: openReducer,
    
});

const store = createStore(rootReducer)

export default store;