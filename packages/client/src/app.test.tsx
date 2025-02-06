import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router"
import { expect, test } from "vitest"
import App from "./App"

test("renders search input", () => {
  render(<App />, { wrapper: BrowserRouter })
  const input = screen.getByPlaceholderText("Search accommodation...")
  expect(input).toBeInTheDocument()
})
