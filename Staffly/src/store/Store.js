import {createStore} from 'redux';
import dataReducer from "./Reducers/dataReducers";

export const store = createStore(dataReducer);
