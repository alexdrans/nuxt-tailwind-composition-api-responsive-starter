export const actions = {
  toggle: ({ commit }: { commit: Function }, payload: boolean) => {
    commit('TOGGLE_MENU', payload)
  },
}

export default actions
