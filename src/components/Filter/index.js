import React from "react"
import Select from "react-select"

export default function Filter({ name, options, onChange, value }) {
  return (
      <Select
        isMulti={true}
        name={name}
        onChange={onChange}
        value={value}
        options={options.map(e => ({label: e, value: e.toLowerCase()}))}
      />
  )
}
