import { Link } from "react-router"
import { Hotel } from "../../hooks/useHotels"

export interface HotelListProps {
  hotels: Hotel[]
}
export function HotelList({ hotels }: HotelListProps) {
  if (hotels.length === 0) {
    return <p>No hotels matched</p>
  }
  return (
    <div>
      {hotels.map((hotel, index) => (
        <li key={index}>
          <Link to={`/hotels/${hotel._id}`} className="dropdown-item">
            <i className="fa fa-building mr-2"></i>
            {hotel.hotel_name}
          </Link>
          <hr className="divider" />
        </li>
      ))}
    </div>
  )
}
