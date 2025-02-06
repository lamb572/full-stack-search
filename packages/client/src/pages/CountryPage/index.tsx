import { useParams } from "react-router"
import { useCountry } from "../../hooks/useCountry"

export default function CountryPage() {
  const params = useParams<{ id?: string }>()

  const { country } = useCountry({ countryId: params.id })

  return (
    <div className="data-container">
      <h1>{country?.country}</h1>
      <h2>{country?.countryisocode}</h2>
    </div>
  )
}
