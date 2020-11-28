import { RootState } from './RootState'

export interface Store {
  state: RootState
  dispatch: Function
  getters: { [key: string]: Function | any }
  commit: Function
}
