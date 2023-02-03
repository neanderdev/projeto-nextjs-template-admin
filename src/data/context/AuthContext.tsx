import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import firebase from '../../firebase/config';

import Usuario from '../../model/Usuario';

interface AuthContextProps {
    usuario: Usuario;
    loginGoogle: () => Promise<void>;
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
        const resposta = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider(),
        );

        await configurarSessao(resposta.user);

        router.push('/');
    }

    useEffect(() => {
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);

        return () => cancelar();
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
