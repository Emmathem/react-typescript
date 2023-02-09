import React, { useState, ReactNode } from 'react'


export const AuthContext = React.createContext({});
const Provider = AuthContext.Provider;

interface Props {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const [authInfo, setAuthInfoh] = useState<object>({ userData: null })
    return (
        <Provider value={{ authInfo }}>
            {children}
        </Provider>
    )
}

export default AuthProvider