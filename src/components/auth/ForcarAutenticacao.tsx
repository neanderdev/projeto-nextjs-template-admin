import { useRouter } from 'next/router';
import Image from 'next/image';
import { ReactNode } from 'react';

import useAuth from '../../data/hook/useAuth';

import loading from '../../../public/images/loading.gif';

interface ForcarAutenticacaoProps {
    children: ReactNode;
}

export default function ForcarAutenticacao({ children }: ForcarAutenticacaoProps) {
    const router = useRouter();

    const { usuario, carregando } = useAuth();

    function renderizarConteudo() {
        return (
            <>
                {children}
            </>
        );
    }

    function renderizarCarregando() {
        return (
            <div className='flex justify-center items-center h-screen'>
                <Image
                    src={loading}
                    alt='Loading'
                />
            </div>
        );
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo();
    } else if (carregando) {
        return renderizarCarregando();
    } else {
        router.push('/autenticacao');
        
        return null;
    }
}