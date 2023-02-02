interface MenuItemProps {
    url: string;
    texto: string;
    icone: JSX.Element;
}

export default function MenuItem({ url, texto, icone }: MenuItemProps) {
    return (
        <li>
            {icone}
        </li>
    );
}