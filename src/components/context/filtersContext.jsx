import { createContext } from "react";

export const FiltersContext = createContext()

export function FiltersProvider ({children}){

    <FiltersContext.Provider value={{
        category: "all",
        minPrice: "0"
     }
    }>
    {children}     
    </FiltersContext.Provider>
} 