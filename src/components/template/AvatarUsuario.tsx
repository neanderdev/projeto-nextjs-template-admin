import Link from 'next/link';
import Image from 'next/image';

import useAuth from '../../data/hook/useAuth';

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario({ className = '' }: AvatarUsuarioProps) {
    const { usuario } = useAuth();

    return (
        <Link href='/perfil' className={`${className}`}>
            <Image
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt='Avatar do Usuário'
                className='w-10 h-10 rounded-full cursor-pointer'
                width={40}
                height={40}
            />
        </Link>
    );
}