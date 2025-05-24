import { collection, onSnapshot } from 'firebase/firestore'
import { computed, onUnmounted, ref } from 'vue'
import { db } from '@/services/firebase'
import { useFirestoreService } from '@/services/firestoreService'

export const useDepartments = () => {
  const items = ref([])
  const loading = ref(true)
  const filter = ref('')

  const collectionName = 'departments'

  const unsubscribe = onSnapshot(collection(db, collectionName), snapshot => {
    items.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    loading.value = false
  })

  onUnmounted(unsubscribe)

  const filteredItems = computed(() => {
    return items.value.filter(
      item =>
        item.name.toLowerCase().includes(filter.value.toLowerCase()) ||
        item.code.toLowerCase().includes(filter.value.toLowerCase())
    )
  })

  const { fetch, create, update, remove } = useFirestoreService(collectionName)

  return {
    items,
    loading,
    filter,
    filteredItems,
    fetch,
    create,
    update,
    remove
  }
}
