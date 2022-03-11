import { DUMMY, FIRST_SCROLL, HOVER_CHANGE } from "./const";

export function dummy (payload)
{
    return({type:DUMMY,payload})
}

export function PrincipalLinkHover()
{
    return({type:HOVER_CHANGE})
}

export function firstScrollAction()
{
    return({type:FIRST_SCROLL})
}