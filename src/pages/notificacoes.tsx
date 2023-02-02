import Layout from '../components/template/Layout';

import useAppData from '../data/hook/useAppData';

export default function Notificacoes() {
    const { nome } = useAppData();

    return (
        <Layout
            titulo='Notificações'
            subtitulo='Aqui você irá gerenciar as suas notificações'
        >
            <h3>Notificações</h3>

            <h3>{nome}</h3>
        </Layout>
    )
}
