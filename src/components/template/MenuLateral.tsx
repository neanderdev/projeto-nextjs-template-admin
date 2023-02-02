import MenuItem from './MenuItem';

import { IconeAjustes, IconeCasa, IconeSino } from '../icons';

export default function MenuLateral() {
    return (
        <aside>
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