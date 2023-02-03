import { useRouter } from 'next/router';
import { createContext, ReactNode, useState } from 'react';

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

// async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
//     const token = await usuarioFirebase.getIdToken();

//     return {
//         uid: usuarioFirebase.uid,
//         email: usuarioFirebase.email,
//         nome: usuarioFirebase.displayName,
//         token: token,
//         provedor: usuarioFirebase.providerData[0]?.providerId,
//         imagemUrl: usuarioFirebase.photoURL,
//     };
// }

export function AuthProvider({ children }: AuthProviderProps) {
    const router = useRouter();

    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

    async function loginGoogle() {
        console.log('Login Google...');

        router.push('/');
    }

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
