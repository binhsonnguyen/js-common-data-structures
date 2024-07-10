import { Stack } from './stack'
import { Maybe } from './maybe'
import { EmptyStackError } from './emptyStackException'

export class StackImpl<T> implements Stack<T> {
  private _peekItem: Maybe<StackItem<T>>
  private _size: number

  constructor () {
    this._size = 0
  }

  get peek (): Maybe<T> {
    return this._peekItem?.item
  }

  empty (): boolean {
    return this._size === 0
  }

  // no need to care about locking this method in javascript
  pop (): Maybe<T> {
    if (this.empty()) throw new EmptyStackError()

    const toPop = this._peekItem
    this._peekItem = this._peekItem?.lowerItem
    this._size--
    return toPop?.item
  }

  // no need to care about locking this method in javascript
  push (item: Maybe<T>): void {
    const newPeekItem = new StackItem(item)
    newPeekItem.lowerItem = this._peekItem
    this._peekItem = newPeekItem
    this._size++
  }
}

class StackItem<T> {
  private readonly _item: Maybe<T>

  constructor (item: Maybe<T>) {
    this._item = item
  }

  private _lowerItem: Maybe<StackItem<T>>

  get lowerItem (): Maybe<StackItem<T>> {
    return this._lowerItem
  }

  set lowerItem (value: Maybe<StackItem<T>>) {
    this._lowerItem = value
  }

  get item (): Maybe<T> {
    return this._item
  }
}
