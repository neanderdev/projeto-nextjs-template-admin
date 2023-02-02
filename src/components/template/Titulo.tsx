interface TituloProps {
    titulo: string;
    subtitulo: string;
}

export default function Titulo({ titulo, subtitulo }: TituloProps) {
    return (
        <div>
            <h1>{titulo}</h1>

            <h2>{subtitulo}</h2>
        </div>
    );
}