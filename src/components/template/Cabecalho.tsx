import Titulo from './Titulo';
import BotaoAlternarTema from './BotaoAlternarTema';
import AvatarUsuario from './AvatarUsuario';

import useAppData from '../../data/hook/useAppData';

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}

export default function Cabecalho({ titulo, subtitulo }: CabecalhoProps) {
    const { tema, alternarTema } = useAppData();

    return (
        <div className='flex'>
            <Titulo
                titulo={titulo}
                subtitulo={subtitulo}
            />

            <div className='flex flex-grow justify-end items-center'>
                <BotaoAlternarTema
                    tema={tema}
                    alternarTema={alternarTema}
                />

                <AvatarUsuario
                    className='ml-3'
                />
            </div>
        </div>
    );
}