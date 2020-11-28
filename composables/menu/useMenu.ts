import { computed, useContext } from '@nuxtjs/composition-api'
import { Store } from '~/types/Store'

export const useMenu = () => {
  const { store }: { store: Store } = useContext()

  const menuOpen = computed(() => {
    return store.getters['menu/isOpen']
  })

  const toggleMenu = () => {
    store.dispatch('menu/toggle')
  }

  return {
    menuOpen,
    toggleMenu,
  }
}
