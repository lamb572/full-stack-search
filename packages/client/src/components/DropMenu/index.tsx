import { City } from "../../hooks/useCity/types"
import { Country } from "../../hooks/useCountry/types"
import { Hotel } from "../../hooks/useHotel"
import { CityList } from "../CityList"
import { CountyList } from "../CountyList"
import { HotelList } from "../HotelList"

export interface DropMenuProps {
  hotels: Hotel[]
  countries: Country[]
  cities: City[]
}
export function DropMenu({ hotels, cities, countries }: DropMenuProps) {
  return (
    <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
      <h2>Hotels</h2>
      <HotelList hotels={hotels} />
      <h2>Countries</h2>
      <CountyList countries={countries} />
      <h2>Cities</h2>
      <CityList cities={cities} />
    </div>
  )
}
