import test from 'ava'
import Stack from '../stack'

test('Stack class should have a push method', t => {
  let stack = new Stack()
  stack.push('a')
  t.pass()
})

test('Stack class should have a pop method', t => {
  let stack = new Stack()
  stack.pop()
  t.pass()
})

test('Stack class should have a peek method', t => {
  let stack = new Stack()
  stack.peek()
  t.pass()
})

test('Stack class should have a isEmpty method', t => {
  let stack = new Stack()
  stack.isEmpty()
  t.pass()
})

test('Stack class should have a clear method.', t => {
  let stack = new Stack()
  stack.clear()
  t.pass()
})

test('The peek method should return the top element of the stack', t => {
  let stack = new Stack()
  stack.push('a')
  stack.push('b')
  t.is(stack.peek(), 'b')
})

test('The pop method should remove and return the top element of the stack', t => {
  let stack = new Stack()
  stack.push('a')
  stack.push('b')
  t.is(stack.pop(), 'b')
})

test('The isEmpty method should return true if a stack does not contain any elements', t => {
  let stack = new Stack()
  t.is(stack.isEmpty(), true)
  stack.push('a')
  t.is(stack.isEmpty(), false)
  stack.clear()
  t.is(stack.isEmpty(), true)
  stack.push('a')
  stack.push('b')
  stack.pop()
  stack.pop()
  t.is(stack.isEmpty(), true)
})

test('The clear method should remove all element from the stack', t => {
  let stack = new Stack()
  stack.push('a')
  stack.push('b')
  stack.clear()
  t.is(stack.length, 0)
  t.is(stack.isEmpty(), true)
})

test('stack length', t => {
  let stack = new Stack()
  stack.push('a')
  stack.push('b')
  t.is(stack.length, 2)
})
