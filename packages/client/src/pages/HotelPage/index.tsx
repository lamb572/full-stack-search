import { useHotel } from "../../hooks/useHotel"
import { useParams } from "react-router"

export default function HotelPage() {
  const params = useParams<{ id?: string }>()

  const { hotel } = useHotel({ hotelId: params.id })

  return (
    <div className="data-container">
      <h1>{hotel?.hotel_name}</h1>
      <h2>Address</h2>
      <div className="address-container">
        <h3>{hotel?.addressline1}</h3>
        <h3>{hotel?.addressline2}</h3>
        <h3>{hotel?.zipcode}</h3>
        <h3>{hotel?.city}</h3>
        <h3>{hotel?.state}</h3>
        <h3>{hotel?.country}</h3>
        <h3>{hotel?.countryisocode}</h3>
      </div>

      <h2>Rating : {hotel?.star_rating}</h2>
    </div>
  )
}
