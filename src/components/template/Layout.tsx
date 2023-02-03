import { ReactNode } from 'react';

import ForcarAutenticacao from '../auth/ForcarAutenticacao';

import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

import useAppData from '../../data/hook/useAppData';

interface LayoutProps {
    titulo: string;
    subtitulo: string;
    children?: ReactNode;
}

export default function Layout({ titulo, subtitulo, children }: LayoutProps) {
    const { tema } = useAppData();

    return (
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
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
        </ForcarAutenticacao>
    );
}