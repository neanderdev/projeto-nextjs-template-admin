import { createContext, ReactNode } from 'react';

const AppContext = createContext({
    nome: null,
});

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{
            nome: 'Teste Contexto API'
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
