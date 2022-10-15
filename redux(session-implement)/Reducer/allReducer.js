import counterReducer from "./counterReducer";
import signInReducer from "./signInReducer";
import {combineReducers} from 'redux';

const allReducer=combineReducers(
    {
        counter:counterReducer,
        signin1:signInReducer
    }
)

export default allReducer;