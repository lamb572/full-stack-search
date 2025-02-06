import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import App from "./homepage"

test("renders search input", () => {
  render(<App />)
  const input = screen.getByPlaceholderText("Search accommodation...")
  expect(input).toBeInTheDocument()
})
