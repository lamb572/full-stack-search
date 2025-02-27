import { Link } from "react-router"
import { Country } from "../../hooks/useCountry/types"

export interface CountyListProps {
  countries: Country[]
}
export function CountyList({ countries }: CountyListProps) {
  if (countries.length === 0) {
    return <p>No countries matched</p>
  }
  return (
    <div>
      {countries.map((country) => (
        <li key={country._id}>
          <Link to={`/country/${country._id}`} className="dropdown-item">
            <i className="fa fa-building mr-2"></i>
            {country.country}
          </Link>
          <hr className="divider" />
        </li>
      ))}
    </div>
  )
}
