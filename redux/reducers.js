import { combineReducers } from "redux"
import { DUMMY } from "./const"

function dummy(state=DUMMY,action)
{
    if (action.type ==DUMMY)return DUMMY
    else return state
}

const rootReducer=combineReducers(
{
    dummy,
});

export default rootReducer;