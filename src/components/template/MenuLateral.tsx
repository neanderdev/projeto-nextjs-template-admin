import Logo from './Logo';
import MenuItem from './MenuItem';

import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons';

export default function MenuLateral() {
    return (
        <aside className='flex flex-col'>
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
                    onClick={() => console.log('Sair')}
                    className='text-red-600 hover:bg-red-400 hover:text-white'
                />
            </ul>
        </aside>
    );
}