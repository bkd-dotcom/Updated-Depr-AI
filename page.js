import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Cute Experienced Crane</title>
        <meta property="og:title" content="Page - Cute Experienced Crane" />
      </Helmet>
    </div>
  )
}

export default Page
