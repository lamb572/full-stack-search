import { Link } from "react-router"
import { Hotel } from "../../hooks/useHotel"

export interface HotelListProps {
  hotels: Hotel[]
}
export function HotelList({ hotels }: HotelListProps) {
  if (hotels.length === 0) {
    return <p>No hotels matched</p>
  }
  return (
    <div>
      {hotels.map((hotel) => (
        <li key={hotel._id}>
          <Link to={`/hotel/${hotel._id}`} className="dropdown-item">
            <i className="fa fa-building mr-2"></i>
            {hotel.hotel_name}
          </Link>
          <hr className="divider" />
        </li>
      ))}
    </div>
  )
}
