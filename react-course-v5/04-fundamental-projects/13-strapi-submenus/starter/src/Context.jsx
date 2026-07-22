import { createContext, useState,useContext, Children } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSideBarOpen] = useState(false);
    const [pageId,setPageId] = useState(null)
    const openSideBar = ()=>{
        setIsSideBarOpen(true)
    }
    const closeSideBar = ()=>{
        setIsSideBarOpen(false)
    }
    return (
        <AppContext.Provider value={{isSidebarOpen,openSideBar,closeSideBar,pageId,setPageId}}>
            {children}
        </AppContext.Provider>
    )
    
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}