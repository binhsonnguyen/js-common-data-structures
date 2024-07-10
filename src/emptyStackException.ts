export class EmptyStackError extends Error {
  constructor (message?: string) {
    super(`EmptyStackError:  ${message ?? ''}`)
    this.name = 'EmptyStackError'
  }
}
