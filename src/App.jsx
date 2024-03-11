import { useState } from 'react'
import Crypto from './components/Crypto.jsx/Crypto'
import Team from './components/Team/Team'
import RecommendationSection from './components/Recommendation/RecommendationSection'
import GetStarted from './components/getStarted/GetStarted'
import TrendingCoins from './components/TrendingCoins/TrendingCoins'

function App() {

  return (
    <>
      <Headers />
      <Crypto />
      <Team />
      <RecommendationSection />
      <GetStarted />
      <TrendingCoins />
    </>
  )
}

export default App
