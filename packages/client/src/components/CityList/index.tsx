import { Link } from "react-router"
import { City } from "../../hooks/useCity/types"

export interface CityListProps {
  cities: City[]
}
export function CityList({ cities }: CityListProps) {
  if (cities.length === 0) {
    return <p>No cities matched</p>
  }
  return (
    <div>
      {cities.map((city) => (
        <li key={city._id}>
          <Link to={`/city/${city._id}`} className="dropdown-item">
            <i className="fa fa-building mr-2"></i>
            {city.name}
          </Link>
          <hr className="divider" />
        </li>
      ))}
    </div>
  )
}
