import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore'
import { db } from './firebase'
export const useFirestoreService = collectionName => {
  const fetch = id => getDoc(doc(db, collectionName, id))
  const create = data => addDoc(collection(db, collectionName), data)
  const update = (id, data) => updateDoc(doc(db, collectionName, id), data)
  const remove = id => deleteDoc(doc(db, collectionName, id))

  return { fetch, create, update, remove }
}
