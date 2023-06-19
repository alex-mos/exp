import Stack from '../stack'
import { assert, expect } from 'chai';

describe('Stack', () => {
  it('Stack class should have a push method', () => {
    let stack = new Stack()
    expect(stack.push).to.exist
  })

  it('Stack class should have a pop method', () => {
    let stack = new Stack()
    expect(stack.pop).to.exist

  })

  it('Stack class should have a peek method', () => {
    let stack = new Stack()
    expect(stack.peek).to.exist

  })

  it('Stack class should have a isEmpty method', () => {
    let stack = new Stack()
    expect(stack.isEmpty).to.exist
  })

  it('Stack class should have a clear method.', () => {
    let stack = new Stack()
    expect(stack.clear).to.exist
  })

  it('The peek method should return the top element of the stack', () => {
    let stack = new Stack()
    stack.push('a')
    stack.push('b')
    expect(stack.peek()).to.equal('b')
  })

  it('The pop method should remove and return the top element of the stack', () => {
    let stack = new Stack()
    stack.push('a')
    stack.push('b')
    expect(stack.pop()).to.equal('b')
  })

  it('The isEmpty method should return true if a stack does not contain any elements', () => {
    let stack = new Stack()
    expect(stack.isEmpty()).to.be.true
    stack.push('a')
    expect(stack.isEmpty()).to.be.false
    stack.clear()
    expect(stack.isEmpty()).to.be.true
    stack.push('a')
    stack.push('b')
    stack.pop()
    stack.pop()
    expect(stack.isEmpty()).to.be.true
  })

  it('The clear method should remove all element from the stack', () => {
    let stack = new Stack()
    stack.push('a')
    stack.push('b')
    stack.clear()
    expect(stack.length).to.equal(0)
    expect(stack.isEmpty()).to.be.true
  })

  it('stack length', () => {
    let stack = new Stack()
    stack.push('a')
    stack.push('b')
    expect(stack.length).to.equal(2)
  })
})
