import { createContext, useState } from "react"

import PropTypes from "prop-types";
export const SidebarContext = createContext()

const SidebarContextProvider = ({ children }) => {

 const [sidebar,setSidebar]=useState(true);
 const [category,setCategory]=useState(0);

  const state={sidebar,setSidebar}
  return <SidebarContext.Provider value={state}>
    {children}
  </SidebarContext.Provider>
}

SidebarContextProvider.propTypes={
  children:PropTypes.node,
}
export default SidebarContextProvider