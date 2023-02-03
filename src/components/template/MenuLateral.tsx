import Logo from './Logo';
import MenuItem from './MenuItem';

import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons';

import useAuth from '../../data/hook/useAuth';

export default function MenuLateral() {
    const { logout } = useAuth();

    return (
        <aside className='flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200'>
            <div
                className='flex flex-col justify-center items-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800'
            >
                <Logo />
            </div>

            <ul className='flex-grow'>
                <MenuItem
                    url='/'
                    texto='Início'
                    icone={IconeCasa}
                />

                <MenuItem
                    url='/ajustes'
                    texto='Ajustes'
                    icone={IconeAjustes}
                />

                <MenuItem
                    url='/notificacoes'
                    texto='Notificacoes'
                    icone={IconeSino}
                />
            </ul>

            <ul>
                <MenuItem
                    texto='Sair'
                    icone={IconeSair}
                    onClick={logout}
                    className='text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white'
                />
            </ul>
        </aside>
    );
}