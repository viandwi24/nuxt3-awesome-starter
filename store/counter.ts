import { defineStore } from 'pinia'

export interface ICounterState {
  count: number
}

export const useCounter = defineStore('counter', {
  state: (): ICounterState => {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})