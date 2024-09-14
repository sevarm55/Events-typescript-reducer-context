import React, { useContext } from "react";
import { ActionTypes, IEvents } from "../lib/types";
import { deleteEvent } from "../lib/api";
import { Context } from "../lib/context";

interface IProps {
  event: IEvents;
}

export const Event:React.FC<IProps> = ({event}) => {

    const context = useContext(Context)
    if(!context) {
        throw new Error("Context not found")
    }
    const {dispatch} = context

    const handleRemove = () => {
        deleteEvent(event.id)
        dispatch({type:ActionTypes.RemoveEvent,payload:event.id})
    }
    
    
    
  return <div>
    <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button onClick={handleRemove}>x</button>
  </div>;
};
