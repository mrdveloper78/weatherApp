import {combineReducers,legacy_createStore as createStore } from "redux"
import weatherReducer from "../Reducer/WeatherReucer"



const rootReducer = combineReducers({weatherState:weatherReducer});

const mainStore = createStore(rootReducer);


export default mainStore;