import React from "react"
import Select from "react-select"

export default function Filter({
  name,
  options,
  onChange,
  value,
  placeholder,
}) {
  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      placeholder={placeholder}
      isMulti={true}
      name={name}
      onChange={onChange}
      value={value}
      options={options.map(e => ({ label: e, value: e.toLowerCase() }))}
    />
  )
}
