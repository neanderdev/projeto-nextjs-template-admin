import Logo from './Logo';
import MenuItem from './MenuItem';

import { IconeAjustes, IconeCasa, IconeSino } from '../icons';

export default function MenuLateral() {
    return (
        <aside>
            <div
                className='flex flex-col justify-center items-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800'
            >
                <Logo />
            </div>

            <ul>
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
        </aside>
    );
}