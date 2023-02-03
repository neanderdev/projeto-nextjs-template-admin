import { useState } from 'react';

import AuthInput from '../components/auth/AuthInput';
import { IconeAtencao } from '../components/icons';

import useAuth from '../data/hook/useAuth';

export default function Autenticacao() {
    const { cadastrar, login, loginGoogle } = useAuth();

    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [erro, setErro] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function exibirErro(msg: string, tempoEmSegundos = 5) {
        setErro(msg);

        setTimeout(() => setErro(null), tempoEmSegundos * 1000);
    }

    async function submeter() {
        try {
            if (modo === 'login') {
                await login(email, senha);
            } else {
                await cadastrar(email, senha);
            }
        } catch (erro: any) {
            exibirErro(erro.message ?? 'Ocorreu um erro inesperado.');
        }
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='hidden md:block md:w-1/2'>
                <div className='h-screen w-full bg-indigo-400' />
            </div>

            <div className='m-10 w-full md:w-1/2'>
                <h1 className='text-3xl font-semibold mb-5'>
                    {
                        modo === 'login'
                            ? 'Entre com a Sua Conta'
                            : 'Cadastre-se na Plataforma'
                    }
                </h1>

                {
                    erro ? (
                        <div className='flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg'>
                            {IconeAtencao()}

                            <span className='ml-3'>
                                {erro}
                            </span>
                        </div>
                    )
                        : false
                }

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
                    onClick={loginGoogle}
                >
                    Entrar com Google
                </button>

                {
                    modo === 'login'
                        ? (
                            <p className='mt-8'>
                                Novo por aqui?

                                <span className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer' onClick={() => setModo('cadastro')}>
                                    Crie uma Conta Gratuitamente
                                </span>
                            </p>
                        )
                        : (
                            <p className='mt-8'>
                                Já faz parte da nossa comunidade?

                                <span className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer' onClick={() => setModo('login')}>
                                    Entre com a suas Credenciais
                                </span>
                            </p>
                        )
                }
            </div>
        </div>
    );
}