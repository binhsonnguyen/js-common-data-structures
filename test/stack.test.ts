import { expect, test } from '@jest/globals'
import { StackImpl } from '../src/stackImpl'
import { Stack } from '../src/stack'

test('test create stack', () => {
  const stack: Stack<any> = new StackImpl<any>()
  expect(stack.empty()).toBeTruthy()
})

test('test push items to stack', () => {
  let stack: Stack<any> = new StackImpl<any>()
  stack.push(0)
  expect(stack.empty()).toBeFalsy()

  stack = new StackImpl<any>()
  stack.push('hello')
  expect(stack.empty()).toBeFalsy()

  stack = new StackImpl<any>()
  stack.push(false)
  expect(stack.empty()).toBeFalsy()

  stack = new StackImpl<any>()
  stack.push(null)
  expect(stack.empty()).toBeFalsy()
})

test('test view stack peak', () => {
  const stack: Stack<any> = new StackImpl<any>()
  stack.push(0)
  expect(stack.peek).toBe(0)
  stack.push('hello')
  expect(stack.peek).toBe('hello')
  stack.push(false)
  expect(stack.peek).toBeFalsy()
  stack.push(true)
  expect(stack.peek).toBeTruthy()
  stack.push(null)
  expect(stack.peek).toBe(null)
})

test('test pop out stack item', () => {
  const stack: Stack<any> = new StackImpl<any>()
  stack.push(0)
  stack.push('hello')
  stack.push(false)
  stack.push(true)
  stack.push(null)

  expect(stack.pop()).toBe(null)
  expect(stack.pop()).toBe(true)
  expect(stack.pop()).toBe(false)
  expect(stack.pop()).toBe('hello')
  expect(stack.pop()).toBe(0)

  // The function that throws an exception needs to be invoked within a wrapping
  // function otherwise the toThrow assertion will fail.
  expect(() => stack.pop()).toThrow('EmptyStackError')
})
