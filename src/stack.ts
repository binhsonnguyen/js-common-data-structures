import { Maybe } from './maybe'

export interface Stack<T> {
    push(item: Maybe<T>): void;
    pop(): Maybe<T>;
    empty(): boolean;
    peek: Maybe<T>;
}

