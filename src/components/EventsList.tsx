import { useContext, useEffect } from "react"
import { getEvents } from "../lib/api"
import { Context } from "../lib/context"
import { ActionTypes } from "../lib/types"
import { Event } from "./Events"

export const EventList = () => {

    const context = useContext(Context)
    if(!context) {
        throw new Error("Context not found")
    }
    const {state,dispatch} = context

    useEffect(() => {
        getEvents(state.currentFilter)
        .then(res => {
            dispatch({type:ActionTypes.SetEvent, payload:res})
        })
    },[state.currentFilter])
    
    return <>
        <div className="list">
            {
                state.events.map(event => 
                    <Event 
                        key={event.id}
                        event={event}
                    />)
            }
        </div>
    </>
}