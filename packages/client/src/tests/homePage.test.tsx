import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router"
import { beforeAll, expect, test, vi } from "vitest"
import App from "../App"

beforeAll(() => {
  global.fetch = vi.fn().mockImplementation(async (url: string) => {
    if (url.includes("/search")) {
      return {
        ok: true,
        status: 200,
        async json() {
          return {
            hotels: [
              {
                chain_name: "No chain",
                hotel_name: "Suites South Burlington",
                addressline1: "1712 Shelburne Rd.",
                addressline2: "",
                zipcode: "5403",
                city: "So Burlington (VT)",
                state: "Vermont",
                country: "United States",
                countryisocode: "US",
                star_rating: 2.5,
              },
            ],
            cities: [],
            countries: [{ country: "United States", countryisocode: "US" }],
          }
        },
      }
    }
    if (url.includes("/hotels")) {
      return {
        ok: true,
        status: 200,
        async json() {
          return {
            chain_name: "No chain",
            hotel_name: "Suites South Burlington",
            addressline1: "1712 Shelburne Rd.",
            addressline2: "",
            zipcode: "5403",
            city: "So Burlington (VT)",
            state: "Vermont",
            country: "United States",
            countryisocode: "US",
            star_rating: 2.5,
          }
        },
      }
    }
    return {
      ok: true,
      status: 204,
      async json() {
        return {}
      },
    }
  })
})

test("renders search input", () => {
  render(<App />, { wrapper: BrowserRouter })
  const input = screen.getByPlaceholderText("Search accommodation...")
  expect(input).toBeInTheDocument()
})

test("displays search results", async () => {
  render(<App />, { wrapper: BrowserRouter })
  const input = screen.getByPlaceholderText("Search accommodation...")

  fireEvent.change(input, { target: { value: "uni" } })

  const results = await screen.findByText(/Suites South Burlington/i)
  expect(results).toBeInTheDocument()
})

test("navigate to results", async () => {
  render(<App />, { wrapper: BrowserRouter })
  const input = screen.getByPlaceholderText("Search accommodation...")

  fireEvent.change(input, { target: { value: "uni" } })

  const results = await screen.findByText(/Suites South Burlington/i)

  fireEvent.click(results)

  const heading = await screen.findByText(/Suites South Burlington/i)

  expect(heading).toBeInTheDocument()
})
