import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button,CardBody,Card } from '@pancakeswap-libs/uikit'
import { motion } from 'framer-motion'

const Page4a = styled.section`
${({ theme }) => theme.mediaQueries.sm} {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
}
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    min-height: 100vh;
    
`;

const Left = styled.div`
    margin-bottom: 1rem;
`;

const Right = styled(motion.div)`
${({ theme }) => theme.mediaQueries.sm} {
    width: 25rem;
    height: 30rem;
}
    width: 90%;
`;

const H = styled.h2`
    margin-bottom: 2rem;
    font-weight: 550;
    font-size: 2.7rem;
    padding: 0;
    color:  #EAE2FC; // #EC5800;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 2rem;
    padding: 0 1rem;
      }
`;

const T = styled.p`
    background: ${({ theme }) => theme.colors.text};
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0 0 1rem 0;
    padding: 0;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 1.5rem;
    padding: 0 1rem;
      }
`;

const Page4 = () => {
    return (
        <Page4a>
            <Left>
                <H >Rim Rim makes world go round</H>
                <T >Used by millions Trusted with billions Trusted with</T>
                <T >billions Trusted with billions</T>
                <T>Used by millions Trusted with billions Trusted with</T>
                <Button style={{marginTop:"3rem"}}>Buy Rim</Button>
            </Left>
            <Right
                initial={{ x: 0, y:0}}
                animate={{ x: 20, y: -10 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse"}}
            >
                <img src="/images/5.png" alt="coin" style={{width:"100%",height:"100%"}} />
            </Right>    
        </Page4a>
    )
}

export default Page4
