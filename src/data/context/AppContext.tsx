import { createContext, ReactNode, useEffect, useState } from 'react';

interface AppContextProps {
    tema: string | null;
    alternarTema: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [tema, setTema] = useState<string | null>('dark');

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '');

        localStorage.setItem('tema', tema === '' ? 'dark' : '')
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema');

        setTema(temaSalvo);
    }, []);

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema: alternarTema,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
