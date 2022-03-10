import { DUMMY, HOVER_CHANGE } from "./const";

export function dummy (payload)
{
    return({type:DUMMY,payload})
}

export function PrincipalLinkHover()
{
    return({type:HOVER_CHANGE})
}