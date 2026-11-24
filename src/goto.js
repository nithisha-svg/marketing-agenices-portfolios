import { createContext, useContext } from "react";

/* goto(id) scrolls the book to the panel with that data-id (or index). */
export const GotoContext = createContext(() => {});
export const useGoto = () => useContext(GotoContext);
