import Maybe from './maybe'

export default interface StackInterface<T> {
  peek: Maybe<T>

  push: (item: Maybe<T>) => void

  pop: () => Maybe<T>

  empty: () => boolean
}
