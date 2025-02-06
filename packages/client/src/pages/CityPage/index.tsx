import { useParams } from "react-router"
import { useCity } from "../../hooks/useCity"

export default function CityPage() {
  const params = useParams<{ id?: string }>()

  const { city } = useCity({ cityId: params.id })

  return (
    <div className="data-container">
      <h1>{city?.name}</h1>
    </div>
  )
}
