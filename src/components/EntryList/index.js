import React, { useState } from "react"
import Entry from "./Entry"
import Filter from "../Filter"

export default function EntryList({ entries }) {
  const categories = [...new Set(entries.map(e => e.category))]
  const crypto = [
    ...new Set(entries.map(e => e.crypto).reduce((a, b) => a.concat(b))),
  ]

  const [selected, setSelected] = useState({
    categories: [],
    crypto: [],
  })

  const updateCategories = e => {
    setSelected({
      ...selected,
      categories: e,
    })
  }

  const updateCrypto = e => {
    setSelected({
      ...selected,
      crypto: e,
    })
  }

  return (
    <div>
      <Filter
        name="categories"
        options={categories}
        onChange={updateCategories}
        value={selected.categories}
      />
      <Filter
        name="cryptos"
        options={crypto}
        onChange={updateCrypto}
        value={selected.crypto}
      />
      <div className="list">
        {entries
          .filter(
            e =>
              (selected.crypto.length == 0 ||
                selected.crypto.some(c => e.crypto.includes(c.label))) &&
              (selected.categories.length == 0 ||
                selected.categories.some(c => e.category == c.label))
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((e, index) => (
            <Entry key={index} entry={e} />
          ))}
      </div>
    </div>
  )
}
