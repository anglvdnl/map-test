import { createContext } from 'react'

export const UserContext = createContext(null)

export const DefaultUser = {
    isLoggedIn: false,
    name: '',
    email: '',
    picture: ''
}