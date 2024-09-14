import React from "react";
import { IContextTypes } from "./types";


export const Context = React.createContext<IContextTypes|undefined>(undefined)