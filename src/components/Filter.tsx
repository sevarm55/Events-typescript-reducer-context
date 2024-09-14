import { useContext } from "react"
import { Context } from "../lib/context"
import { ActionTypes, FilterTypes } from "../lib/types"

export const Filter = () => {

    const context = useContext(Context)
    if(!context) {
        throw new Error("Context not found")
    }
    const {state,dispatch} = context

    return <>
        <div className="select-wrapper">
            <select 
                value={state.currentFilter}
                onChange={(e) => {
                    dispatch({type:ActionTypes.SetFilter,payload:e.target.value})
                }}
            >
                <option value={FilterTypes.All}>all</option>
                <option value={FilterTypes.Opera}>opera</option>
                <option value={FilterTypes.Ballet}>ballet</option>
            </select>
        </div>
    </>
}