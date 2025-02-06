import { ChangeEvent } from "react"

export interface SearchBarProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  showClearBtn: boolean
  onClear: () => void
  value: string | undefined
}
export default function SearchBar({
  onChange,
  showClearBtn,
  onClear,
  value,
}: SearchBarProps) {
  return (
    <div className="form">
      <i className="fa fa-search"></i>
      <input
        type="text"
        className="form-control form-input"
        placeholder="Search accommodation..."
        onChange={onChange}
        value={value}
      />
      {showClearBtn && (
        <span className="left-pan">
          <i className="fa fa-close" onClick={onClear}></i>
        </span>
      )}
    </div>
  )
}
