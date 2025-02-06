import { ChangeEvent, useState } from "react"
import { useSearch } from "../../hooks/useSearch"
import SearchBar from "../../components/SearchBar"
import { DropMenu } from "../../components/DropMenu"

export default function HomePage() {
  const [showClearBtn, setShowClearBtn] = useState(false)

  const { isError, isLoading, reset, searchResults, trigger } = useSearch()
  const cities = searchResults?.cities || []
  const countries = searchResults?.countries || []
  const hotels = searchResults?.hotels || []

  const isResultsEmpty = !cities.length && !countries.length && !hotels.length

  const handleClear = () => {
    setShowClearBtn(false)
    reset()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      handleClear()
      return
    }

    setShowClearBtn(true)
    trigger({ filter: event.target.value })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="dropdown">
              <SearchBar
                onChange={handleChange}
                showClearBtn={showClearBtn}
                onClear={handleClear}
              />
              {!isResultsEmpty && (
                <DropMenu
                  hotels={hotels}
                  cities={cities}
                  countries={countries}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
