import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from '../App'

describe("App (Component):", () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByTestId("hello")).toHaveTextContent("Hello world")
  })
})
