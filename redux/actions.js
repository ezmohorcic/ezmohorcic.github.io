import { DUMMY } from "./const";

export function dummy (payload)
{
    return({type:DUMMY,payload})
}