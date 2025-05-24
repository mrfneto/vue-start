import { auth } from './firebase'

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth'

export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const recover = email => sendPasswordResetEmail(auth, email)

export const logout = () => signOut(auth)

export const watchAuthStage = callback => onAuthStateChanged(auth, callback)

export const verifyErrorCode = error => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Endereço de e-mail inválido.'
    case 'auth/user-not-found':
      return 'Usuário não encontrado. Verifique seu e-mail.'
    case 'auth/wrong-password':
      return 'Senha incorreta. Tente novamente.'
    case 'auth/weak-password':
      return 'A senha é muito fraca. Use uma senha mais forte.'
    case 'auth/email-already-in-use':
      return 'Este e-mail já está em uso. Tente outro.'
    default:
      return 'Ocorreu um erro de autenticação. Tente novamente.'
  }
}
