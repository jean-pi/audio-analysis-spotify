import { useContext } from "react"
import { AppContext } from "../context"


export default function useAppContext() {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within a AppContextProvider");
    if(context) console.log("a")
    return context;
}