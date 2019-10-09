import React from "react"
import Entry from "../components/Entry"

export default function EntryList({ entries }) {
  return (
    <div>
      {entries.map(e => (
        <Entry entry={e} />
      ))}
    </div>
  )
}
