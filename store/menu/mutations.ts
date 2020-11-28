import { MenuState } from './state'

export const mutations = {
  TOGGLE_MENU: (state: MenuState, payload: boolean) => {
    state.menuOpen = payload === undefined ? !state.menuOpen : payload
  },
}

export default mutations
