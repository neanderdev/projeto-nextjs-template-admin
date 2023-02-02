interface AuthInputProps {
    tipo: 'text' | 'email' | 'password';
    obrigatorio?: boolean;
    label: string;
    valor: string;
    valorMudou: (novoValor: string) => void;
}

export default function AuthInput({ tipo, obrigatorio = false, label, valor, valorMudou }: AuthInputProps) {
    return (
        <div className='flex flex-col'>
            <label>
                {label}
            </label>

            <input
                type={tipo ?? 'text'}
                value={valor}
                onChange={(event) => valorMudou(event.target.value)}
                required={obrigatorio}
            />
        </div>
    );
}