import { combineReducers } from "redux"
import { DUMMY, FIRST_SCROLL, HOVER_CHANGE, PROJECT_SCROLL } from "./const"

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
function firstScroll(state=0,action)
{
    if(action.type===FIRST_SCROLL)
    {
        if(state<14)return state+1;
        else return state
        
    }
    else return state;
}
function projectScroll(state=false,action)
{
    if(action.type===PROJECT_SCROLL){return true;}
    else return state;
}
const rootReducer=combineReducers(
{
    dummy,
    pLinkHover,
    firstScroll,
    projectScroll,
});

export default rootReducer;