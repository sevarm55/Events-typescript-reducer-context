import { ActionTypes, FilterTypes, IActions, IEvents, IState } from "./types";

export const reducer = (state:IState, action:IActions):IState => {
    switch(action.type) {
        case ActionTypes.SetEvent :
            return {
                ...state,
                events:action.payload as IEvents[]
            }
        case ActionTypes.SetFilter :
            return {
                ...state,
                currentFilter: action.payload as FilterTypes
            }
        case ActionTypes.RemoveEvent :
            return {
                ...state,
                events: state.events.filter(event => event.id != action.payload)
            }
        default:
            return state
    }
}