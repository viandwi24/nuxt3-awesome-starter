export interface ICounterState {
  count: number
}

export const useExample = defineStore('example', {
  state: (): ICounterState => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    increment2x() {
      this.count *= 2
    },
  },
})
