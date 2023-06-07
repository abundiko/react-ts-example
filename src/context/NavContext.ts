import React from "react";
import { NavContextType } from "../types";

const NavContext  = React.createContext<NavContextType>({
  ref: null,
  show: ()=>null,
  hide: ()=>null
});
export default NavContext;