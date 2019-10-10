import React, { useState } from "react"
import Entry from "./Entry"
import Filter from "../Filter"

export default function EntryList({ entries }) {
  const categories = [
    ...new Set(entries.map(e => e.categories).reduce((a, b) => a.concat(b))),
  ]
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
      <div className="list">
        <div className="list-header">
          <Filter
            name="categories"
            placeholder="Categories"
            options={categories}
            onChange={updateCategories}
            value={selected.categories}
          />
          <Filter
            name="cryptos"
            placeholder="Cryptos"
            options={crypto}
            onChange={updateCrypto}
            value={selected.crypto}
          />
        </div>
        {entries
          .filter(
            e =>
              (selected.crypto.length == 0 ||
                selected.crypto.some(c => e.crypto.includes(c.label))) &&
              (selected.categories.length == 0 ||
                selected.categories.some(c => e.categories.includes(c.label)))
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((e, index) => (
            <Entry key={index} entry={e} />
          ))}
      </div>
    </div>
  )
}
