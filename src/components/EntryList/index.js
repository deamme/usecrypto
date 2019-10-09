import React from "react"
import Entry from "./Entry"

export default function EntryList({ entries }) {
  return (
    <div className="list">
      {entries
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((e, index) => (
          <Entry key={index} entry={e} />
        ))}
    </div>
  )
}
