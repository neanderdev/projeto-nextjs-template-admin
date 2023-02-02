import { useState } from 'react';

import AuthInput from '../components/auth/AuthInput';

export default function Autenticacao() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <div>
            <h1>Autenticação</h1>

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
        </div>
    );
}