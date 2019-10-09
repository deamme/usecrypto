import React from "react"
import Entry from "./Entry"

export default function EntryList({ entries }) {
  return (
    <div className="list">
      {entries.map(e => (
        <Entry entry={e} />
      ))}
    </div>
  )
}
