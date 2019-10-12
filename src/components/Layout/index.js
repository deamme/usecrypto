import React from "react"
import GithubCorner from "react-github-corner"

import { Helmet } from "react-helmet"

import "./assets/main.css"

export default ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/inter-ui@3.10.0/inter.min.css"
      />
    </Helmet>
    <GithubCorner href="https://github.com/deamme/usecrypto" />
    {children}
  </div>
)
