interface AuthInputProps {
    tipo: 'text' | 'email' | 'password';
    obrigatorio?: boolean;
    label: string;
    valor: string;
    naoRenderizarQuando?: boolean;
    valorMudou: (novoValor: string) => void;
}

export default function AuthInput({ tipo, obrigatorio = false, label, valor, naoRenderizarQuando = false, valorMudou }: AuthInputProps) {
    return naoRenderizarQuando ? null : (
        <div className='flex flex-col mt-4'>
            <label>
                {label}
            </label>

            <input
                type={tipo ?? 'text'}
                value={valor}
                onChange={(event) => valorMudou(event.target.value)}
                required={obrigatorio}
                className='px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:outline-none focus:bg-white'
            />
        </div>
    );
}