import Link from 'next/link';

interface MenuItemProps {
    url: string;
    texto: string;
    icone: JSX.Element;
}

export default function MenuItem({ url, texto, icone }: MenuItemProps) {
    return (
        <li className='hover:bg-gray-100'>
            <Link
                href={url}
                className='flex flex-col justify-center items-center w-20 h-20'
            >
                {icone}

                <span className='text-xs font-light text-gray-600'>
                    {texto}
                </span>
            </Link>
        </li>
    );
}