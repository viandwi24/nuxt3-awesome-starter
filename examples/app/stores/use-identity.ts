export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = definePiniaStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Alfian',
    lastName: 'Dwi',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Alfian'
      this.lastName = 'Dwi'
    },
  },
  getters: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
