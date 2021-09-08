import { createStore , combineReducers } from "redux";
import { formReducer } from "./formReducer";

const rootReducer = combineReducers({
    info: formReducer
})

export const store = createStore(rootReducer)