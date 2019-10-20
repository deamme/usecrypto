import React from "react"
import GithubCorner from "react-github-corner"

import { Helmet } from "react-helmet"

import "./assets/main.css"

const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <meta charSet="utf-8" />

      {/** Primary Meta Tags **/}
      <title>Use Crypto</title>
      <meta name="title" content="Use Crypto" />
      <meta
        name="description"
        content="A list of resources where you can spend your ETH, BTC, DAI etc."
      />

      {/** Open Graph / Facebook **/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://usecrypto.xyz/" />
      <meta property="og:title" content="Use Crypto" />
      <meta
        property="og:description"
        content="A list of resources where you can spend your ETH, BTC, DAI etc."
      />
      <meta property="og:image" content="https://webshot.deam.io/usecrypto.xyz" />

      {/** Twitter  **/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://usecrypto.xyz/" />
      <meta property="twitter:title" content="Use Crypto" />
      <meta
        property="twitter:description"
        content="A list of resources where you can spend your ETH, BTC, DAI etc."
      />
      <meta property="twitter:image" content="https://webshot.deam.io/usecrypto.xyz" />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/inter-ui@3.10.0/inter.min.css"
      />
    </Helmet>
    <GithubCorner href="https://github.com/deamme/usecrypto" />
    {children}
  </div>
)

export default Layout
