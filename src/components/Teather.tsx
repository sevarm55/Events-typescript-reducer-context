import { useReducer } from "react"
import { EventList } from "./EventsList"
import { Filter } from "./Filter"
import { reducer } from "../lib/reducer"
import { initialState } from "../lib/initialState"
import { Context } from "../lib/context"

export const Teather = () => {

    const [state,dispatch] = useReducer(reducer,initialState)


    return <div>
        <Context.Provider value={{state,dispatch}}>
            <Filter />
            <EventList />
        </Context.Provider>
    </div>
}