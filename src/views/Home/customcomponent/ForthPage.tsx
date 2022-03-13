import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button,CardBody,Card } from '@pancakeswap-libs/uikit'
import Tilt from 'react-parallax-tilt';

const Page3a = styled.section`
${({ theme }) => theme.mediaQueries.sm} {
    max-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #3A3076;
    // background-image:url('/images/back.png');
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    padding: 0;
}
    // background-color: linear-gradient(to bottom, #da93e6, #b178ca, #885fae, #614792, #3a3076);
    // background-image:url('/images/back.png');
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: auto 100%;
    padding: 2rem 0;
`;

const Box = styled.div`
${({ theme }) => theme.mediaQueries.sm} {
    height: auto;
    width: 90%;
    background-color:rgba(255,0,0,0.1);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem 3rem 2rem;
}
    height: auto;
    width: 90%;
`;

const AdvancedCard = styled(Card)`
${({ theme }) => theme.mediaQueries.sm} {
    max-width: 25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    
    border-radius: 2rem;
    background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
    margin: 0 1rem;
}
    width: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
    border-radius: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    margin-top: 1rem;
    
`;

const CardAlign = styled.div`
${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-direction: row;
}
    flex-direction: column;
    
`;

const Page3 = () => {
    return (
        <Page3a>
            <Box >
                <Heading size="xl" mb="2rem"><span style={{color:"#EAE2FC"}}>Win</span> millions in prizes</Heading>
                <CardAlign>
                    <Tilt>
                    <AdvancedCard style={{background:"#FFFFFF"}}>
                        <img src="/images/logo.png" alt="paw" style={{width:"3rem",marginLeft:"90%"}} />
                        <Text color="#000000" fontSize="1.5rem" mb="16px">Trade</Text>
                        <Heading color=" #000000" size="xl" style={{paddingLeft:"2rem"}} mb="16px" > $ 25 millions</Heading>
                        <Text color=" #000000" fontSize="1.5rem" mb="16px" >In Eth won so far</Text>
                        <Text color="#000000" fontSize="1.5rem" mb="16px">Will ETH price rise or fall? guess <div>correctly to win</div></Text>
                        <Button  mb="16px" style={{margin:"2rem 0 0 8%",padding:"2rem 5rem 2rem 5rem "}}>Play</Button>
                    </AdvancedCard>
                    </Tilt>
                    <Tilt>
                    <AdvancedCard style={{background:"linear-gradient(to right, #141e30, #243b55)"}}>
                         <img src="/images/logo.png" alt="paw" style={{width:"3rem",marginLeft:"90%"}} />
                        <Text color="rgb(255, 178, 55)" fontSize="1.5rem" mb="16px">Earn</Text>
                        <Heading color="rgb(255, 178, 55)" size="xl" style={{paddingLeft:"2rem"}} mb="16px" > $ 25 millions</Heading>
                        <Text color="rgb(255, 178, 55)" fontSize="1.5rem" mb="16px" >In Eth won so far</Text>
                        <Text color="rgb(255, 178, 55)" fontSize="1.5rem" mb="16px">Will ETH price rise or fall? guess <div>correctly to win</div></Text>
                        <Button variant='tertiary' mb="16px" style={{margin:"2rem 0 0 8%",padding:"2rem 5rem 2rem 5rem "}}>Buy Ticket</Button>
                    </AdvancedCard>
                    </Tilt>
                </CardAlign>
            </Box>
        </Page3a>
    )
}

export default Page3
