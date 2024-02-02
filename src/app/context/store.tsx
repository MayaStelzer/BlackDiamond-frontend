'use client';

import {createContext, useContext, Dispatch, SetStateAction, useState, ReactNode} from "react";
import {CardType} from "@/model/cardType";

interface ContextProps {
    cards : CardType[],
    setCards: Dispatch<SetStateAction<CardType[]>>
}

const GlobalContext = createContext<ContextProps>({
    cards: [],
    setCards: (): CardType[] => []
})

export const GlobalContextProvider = ({ children }: ReactNode) => {
    const [ cards, setCards ] = useState<CardType[]>([]);
    return (
        <GlobalContext.Provider value={{ cards, setCards }} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);