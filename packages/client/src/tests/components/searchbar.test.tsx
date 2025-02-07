import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import SearchBar from "../../components/SearchBar"

test("Render the search bar", () => {
  render(
    <SearchBar
      onChange={function (): void {
        throw new Error("Function not implemented.")
      }}
      showClearBtn={false}
      onClear={function (): void {
        throw new Error("Function not implemented.")
      }}
      value={""}
    />
  )
  const input = screen.getByPlaceholderText("Search accommodation...")
  expect(input).toBeInTheDocument()
})

test("Render the search bar with clear button", () => {
  render(
    <SearchBar
      onChange={function (): void {
        throw new Error("Function not implemented.")
      }}
      showClearBtn={true}
      onClear={function (): void {
        throw new Error("Function not implemented.")
      }}
      value={""}
    />
  )
  const input = screen.getByPlaceholderText("Search accommodation...")
  const clearBtn = screen.getByTestId("clear-button")
  expect(input).toBeInTheDocument()
  expect(clearBtn).toBeInTheDocument()
})
