import { ReactNode } from 'react';

import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

interface LayoutProps {
    titulo: string;
    subtitulo: string;
    children?: ReactNode;
}

export default function Layout({ titulo, subtitulo, children }: LayoutProps) {
    return (
        <div className='flex h-screen w-screen'>
            <MenuLateral />

            <div
                className='flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800'
            >
                <Cabecalho
                    titulo={titulo}
                    subtitulo={subtitulo}
                />

                <Conteudo>
                    {children}
                </Conteudo>
            </div>
        </div>
    );
}