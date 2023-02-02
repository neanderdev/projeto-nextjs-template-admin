import Link from 'next/link';

interface MenuItemProps {
    url?: string;
    texto: string;
    icone: JSX.Element;
    className?: string;
    onClick?: (evento: any) => void;
}

export default function MenuItem({ url, texto, icone, className, onClick }: MenuItemProps) {
    function renderizarLink() {
        return (
            <div
                className={`flex flex-col justify-center items-center w-20 h-20 dark:text-gray-200 ${className}`}
            >
                {icone}

                <span className='text-xs font-light'>
                    {texto}
                </span>
            </div>
        );
    }

    return (
        <li
            className='hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
            onClick={onClick}
        >
            {
                url
                    ? (
                        <Link
                            href={url}
                        >
                            {renderizarLink()}
                        </Link>
                    )
                    : (
                        renderizarLink()
                    )
            }
        </li>
    );
}