import { useState } from 'react';

import AuthInput from '../components/auth/AuthInput';

export default function Autenticacao() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function submeter() {
        if (modo === 'login') {
            console.log('login');
        } else {
            console.log('cadastrar');
        }
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <div className='w-1/2'>
                <h1 className='text-xl font-semibold mb-5'>
                    {
                        modo === 'login'
                            ? 'Entre com a Sua Conta'
                            : 'Cadastre-se na Plataforma'
                    }
                </h1>

                <AuthInput
                    tipo='email'
                    obrigatorio
                    label='Email'
                    valor={email}
                    valorMudou={setEmail}
                />

                <AuthInput
                    tipo='password'
                    obrigatorio
                    label='Senha'
                    valor={senha}
                    valorMudou={setSenha}
                />

                <button
                    className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'
                    onClick={submeter}
                >
                    {
                        modo === 'login'
                            ? 'Entrar'
                            : 'Cadastrar'
                    }
                </button>

                <hr className='my-6 border-gray-300 w-full' />

                <button
                    className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3'
                    onClick={submeter}
                >
                    Entrar com Google
                </button>
            </div>
        </div>
    );
}