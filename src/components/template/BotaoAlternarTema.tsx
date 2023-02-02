import { IconeSol } from '../icons';

interface BotaoAlternarTemaProps {
    tema: string;
    alternarTema: () => void;
}

export default function BotaoAlternarTema({ tema, alternarTema }: BotaoAlternarTemaProps) {
    return tema === 'dark'
        ? (
            <div
                onClick={alternarTema}
            >
                <div>
                    {IconeSol}
                </div>

                <div>
                    <span>Claro</span>
                </div>
            </div>
        )
        : (
            <div></div>
        )
}