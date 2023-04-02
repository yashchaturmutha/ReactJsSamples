import { createStore } from "redux";
import rootReducer  from "./reducers/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducers);

//reducers = contains all states of applcn
//add reducers to createStore -> global centralized state
// Whoever will call this store , can get data 
export default store;
