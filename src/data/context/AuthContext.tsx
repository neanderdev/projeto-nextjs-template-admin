import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import firebase from '../../firebase/config';

import Usuario from '../../model/Usuario';

interface AuthContextProps {
    usuario: Usuario;
    carregando: boolean;
    loginGoogle: () => Promise<void>;
    cadastrar: (email: string, senha: string) => Promise<void>;
    login: (email: string, senha: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
    children: ReactNode;
}

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken();

    return {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        nome: usuarioFirebase.displayName,
        token: token,
        provedor: usuarioFirebase.providerData[0]?.providerId,
        imagemUrl: usuarioFirebase.photoURL,
    };
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-nextjs-auth', String(logado), {
            expires: 7
        });
    } else {
        Cookies.remove('admin-template-nextjs-auth');
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const router = useRouter();

    const [carregando, setCarregando] = useState(true);
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

    async function configurarSessao(usuarioFirebase: firebase.User | null) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase);

            setUsuario(usuario);

            gerenciarCookie(true);

            setCarregando(false);

            return usuario.email;
        } else {
            setUsuario({} as Usuario);

            gerenciarCookie(false);

            setCarregando(false);

            return false;
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true);

            const resposta = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider(),
            );

            await configurarSessao(resposta.user);

            router.push('/');
        } finally {
            setCarregando(false);
        }
    }

    async function cadastrar(email: string, senha: string) {
        try {
            setCarregando(true);

            const resposta = await firebase.auth()
                .createUserWithEmailAndPassword(email, senha);

            await configurarSessao(resposta.user);

            router.push('/');
        } finally {
            setCarregando(false);
        }
    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true);

            const resposta = await firebase.auth()
                .signInWithEmailAndPassword(email, senha);

            await configurarSessao(resposta.user);

            router.push('/');
        } finally {
            setCarregando(false);
        }
    }

    async function logout() {
        try {
            setCarregando(true);

            await firebase.auth().signOut();

            await configurarSessao(null);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-nextjs-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);

            return () => cancelar();
        } else {
            setCarregando(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            cadastrar,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
