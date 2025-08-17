import React from 'react'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Books Vibes</title>
      </Helmet>
     <Banner/>
     <Books/>
    </div>
  )
}

export default Home
