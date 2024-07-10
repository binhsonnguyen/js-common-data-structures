import { Maybe } from './maybe'

export interface Stack<T> {
  peek: Maybe<T>

  push: (item: Maybe<T>) => void

  pop: () => Maybe<T>

  empty: () => boolean
}
