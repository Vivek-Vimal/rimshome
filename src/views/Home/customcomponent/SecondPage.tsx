import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';
import { Heading, Text, Button,CardBody,Card } from '@pancakeswap-libs/uikit'


const Page2e =  styled.section`
    width: 100%;
    min-height: 100vh;
    background-image:url('/images/background2.png');
    background-size: auto 80rem;
    ${({ theme }) => theme.mediaQueries.sm} {
        min-height: 100vh;
        background-size: 100% 100vh;
    }
   
    `;

const Left =  styled.div`
    height: auto;
    ${({ theme }) => theme.mediaQueries.sm} {
        display: flex;
        flex-direction: column;
        height: 50vh;
        padding-top: 6rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;  
    text-align: center;  
    padding-top: 2rem;
`;

const Right = styled.div`

    height: auto; 
    ${({ theme }) => theme.mediaQueries.sm} {
    
        height: 50vh;
        
    } 
    display:flex;
    align-items: center;
    justify-content: space-evenly;  
    flex-direction: column;
    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
    }
`;

const FullCard = styled(Card)`
    border: 2px solid  #e100ff;
    ${({ theme }) => theme.mediaQueries.sm} {
        min-height: 15rem ;
        min-width: 20rem;
        margin-top: 0;
    }
    height: auto ;
    width: auto;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`


const Page2 = () => {
    return (
        
        <Page2e>
            <Left>
                <img src="/images/paw.png" alt="paw" style={{marginBottom:"1rem",width:"6rem"}}/>
                <Heading color=" #EAE2FC" size="xl" bold mb="16px">Use by millions <div>Trusted with billions.</div> </Heading>
                <Text fontSize="1.2rem" bold style={{padding:"0 0.5rem 0 0.5rem"}} >Use by millins Trusted with billions<div>Trusted with billionsTrusted with billionsTrusted with billions</div><div>Trusted with billions</div></Text>
            </Left>
            <Right>
                <Tilt>
                <FullCard>
                    <CardBody>
                        <img src="/images/.png" alt="" style={{width:"3rem",marginLeft:"90%"}} />
                        <Heading size="xl" mb="12px">3.5 millions</Heading>
                        <Heading size="xl" mb="12px" color="rgb(255, 178, 55)">Users</Heading>
                        <img src="/images/left.png" alt="f"  style={{marginTop:"3rem",width:"5rem",height:"6rem",marginLeft:"25%"}}/>
                    </CardBody>
                </FullCard>
                </Tilt>
                <Tilt>
                <FullCard >
                    <CardBody>
                        <img src="/images/.png" alt="" style={{width:"3rem",marginLeft:"90%"}} />
                         <Heading size="xl" mb="12px" >50 millions</Heading>
                         <Heading size="xl" mb="12px" color="#00FFFF">Trades</Heading>
                        <img src="/images/middle.png" alt="f" style={{marginTop:"3rem",width:"8.5rem",marginLeft:"20%"}}/>
                    </CardBody>
                </FullCard>
                </Tilt>
                <Tilt>
                <FullCard>
                    <CardBody>
                        <img src="/images/.png" alt="" style={{width:"3rem",marginLeft:"90%"}} />
                        <Heading size="xl" mb="12px" >$ 15 billions</Heading>
                        <Heading size="xl" mb="12px" color="#C41E3A">Staked</Heading>
                        <img src="/images/right.png" alt="f" style={{marginTop:"3rem",width:"5rem",height:"6rem",marginLeft:"25%"}}/>
                    </CardBody>
                </FullCard>
                </Tilt>
            </Right>
        </Page2e>
       
       
    )
}

export default Page2
