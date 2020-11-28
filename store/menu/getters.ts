import { MenuState } from './state'

export const getters = {
  isOpen: (state: MenuState) => {
    return state.menuOpen
  },
}

export default getters
