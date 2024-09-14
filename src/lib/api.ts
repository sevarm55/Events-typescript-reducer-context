import axios from "axios";
import { FilterTypes, IEvents } from "./types";

export const getEvents = async (type: FilterTypes = FilterTypes.All):Promise<IEvents[]> => {
  const query = type != FilterTypes.All ? `?type=${type}` : "";
  const response = await axios.get(`http://localhost:3004/events${query}`);
  return response.data;
}
export const deleteEvent = async (id:number | string):Promise<IEvents[]> => {
    const response = await axios.delete("http://localhost:3004/events/" + id)
    return response.data
}