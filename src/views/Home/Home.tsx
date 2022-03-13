import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import { motion } from 'framer-motion'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Title from 'views/Title/Title'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import MainPage from './customcomponent/MainPage'
import SecondPage from './customcomponent/SecondPage'
import ThirdPage from './customcomponent/ThirdPage'
import ForthPage from './customcomponent/ForthPage'
import FifthPage from './customcomponent/FifthPage'
import Last from './customcomponent/Last'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/mobile.png');
  background-size: 100% 14rem;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 15rem;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/left.png'), url('/images/right.png');
    background-position: left center, right center;
    background-size: 10rem 100%;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <MainPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <FifthPage />
      <Last />
      {/* <Hero>
        <Title />
        <Text>{TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}</Text>
      </Hero>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 4}}
        // whileHover={{scale: 1.1}}
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        // }}
        // animate={{ rotate: 360 }}
        //         transition={{ duration: 0.5 }}
      >
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </motion.div> */}
    </Page>
  )
}

export default Home
