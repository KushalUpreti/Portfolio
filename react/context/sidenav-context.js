import { createContext, useContext, useState } from "react";

const SideNavContext = createContext({
    scrollPos: null,
    setScrollPos: () => { }
});

export function useSideNavContext() {
    return useContext(SideNavContext);
}

export function SidenavContextProvider({ children }) {
    const [scrollPos, setScrollPos] = useState("None");

    return <SideNavContext.Provider value={{
        scrollPos,
        setScrollPos
    }}>
        {children}
    </SideNavContext.Provider>
}