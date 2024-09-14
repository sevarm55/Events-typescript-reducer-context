import { Dispatch } from "react";

export interface IEvents {
  id: number | string;
  title: string;
  date: string;
  time: string;
  type: string;
  composer: string;
  cover: string;
}

export interface IState {
  events: IEvents[];
  currentFilter: FilterTypes
}

export interface IActions {
  type: ActionTypes;
  payload?: unknown;
}

export interface IContextTypes {
  state: IState;
  dispatch: Dispatch<IActions>;
}

export enum FilterTypes {
  All = "all",
  Opera = "opera",
  Ballet = "ballet",
}

export enum ActionTypes {
  SetEvent,
  SetFilter,
  AddEvent,
  RemoveEvent,
}
