import { combineReducers } from "redux"
import { DUMMY, HOVER_CHANGE } from "./const"

function dummy(state=DUMMY,action)
{
    if (action.type ==DUMMY)return DUMMY
    else return state
}

function pLinkHover(state=0,action) //hover==1 , no_hover==0
{
    if(action.type===HOVER_CHANGE)
    {
        let out=0;
        state? out= 0 : out= 1;
        return out;
    }
    else return state;
}

const rootReducer=combineReducers(
{
    dummy,
    pLinkHover
});

export default rootReducer;