import React,{useState,useCallback} from 'react'
import styled from 'styled-components'
import { Heading, Text, Button, Card, CardBody, Flex } from '@pancakeswap-libs/uikit'
import { motion } from 'framer-motion'
import UnlockButton from 'components/UnlockButton'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useAllHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
// import MobileBar from './MobileBar'

const Sec = styled.section`
    // background-image: url('/images/Delicate.jpg');  
    background-size: 200% 100%;
    min-height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.mediaQueries.sm} { 
        justify-content: space-evenly;
    }
`;

const Left = styled.div`
 ${({ theme }) => theme.mediaQueries.sm} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 22rem;
    }
    padding: 2rem;
`;

const Right = styled(motion.div)`
    background-image: url('/images/pose.png');  
    width: 70%;
    height: 15rem;
    background-size: 100% 100%;
    margin-top: 2rem;
    ${({ theme }) => theme.mediaQueries.lg} {
        width: 22rem; 
        height: 22rem;
        background-size: 100% 100%; 
        background-repeat: no-repeat;
        margin-top: 0;
    }
`;

const Actions = styled.div`
  margin-top: 24px;
`
const Btn = styled.div`
    display: flex;
    flex-direction: column-reverse;
    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction:  row;  
        justify-content: flex-start;
       
        width: 100%;
    }
`
const PC = styled.div`
        display: none;
    ${({ theme }) => theme.mediaQueries.sm} {
        display: block;
    }
`;

const Mobile = styled.div`
        display: block;
    ${({ theme }) => theme.mediaQueries.sm} {
        display: none;
    }
`;


const Upper = styled.div`

`;

const Lower = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: auto;
    flex-direction: column-reverse;
    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        height: 60%;
    }
`;

const H = styled.h2`
   
    font-weight: 550;
    font-size: 3rem;
    padding: 0;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 2rem;
    padding: 0 1rem;
      }
`;
const T = styled.p`
    
    font-weight: 500;
    font-size: 1.8rem;
    margin: 1rem 0 3rem 0;
    padding: 0;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 1.5rem;
    padding: 0 1rem;
      }
`;

const UpdatedCard = styled(Card)`
      display: flex;
      jystify-content: space-between;
      width: 95%;
    //   border: 4px solid #e100ff;
      flex-direction: column;
      background-color: #FFFFFF;
      background-image: url('/images/paw.png');
      ${({ theme }) => theme.mediaQueries.sm} {
        background-size: 20% 90%;
        padding: 1rem 2rem 1.5rem 2rem;
      }
      padding: 1rem;
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-position: 90%;
`

const Page1 = () => {
    const [pendingTx, setPendingTx] = useState(false)
    const { account } = useWallet()
    const farmsWithBalance = useFarmsWithBalance()
    const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)
    const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))
    const TranslateString = useI18n()

    const harvestAllFarms = useCallback(async () => {
        setPendingTx(true)
        try {
          await onReward()
        } catch (error) {
          // TODO: find a way to handle when the user rejects transaction or it fails
        } finally {
          setPendingTx(false)
        }
      }, [onReward])
    
    return (
        <Sec>

            <UpdatedCard>
                
                    <H style={{color:"#DC143C"}}>Rim Rim NFT</H>
                    <T style={{color:'#000000'}}>Now Live</T>
                    <Button>Learn More</Button>
               
            </UpdatedCard>

           <Lower>
            <Left>
               
                <PC>
                    <Heading color="#EAE2FC" size="xxl" bold>The Rim is  <div>made of Rim.</div> </Heading>
                    <Text bold fontSize="2rem" style={{marginTop:"1rem"}}>The universe revolves around Rim</Text>
                </PC>
                <Mobile>
                    <Heading color=" #EAE2FC" size="xl" bold>The Rim is made of Rim.</Heading>
                    <Text bold fontSize="1.2rem" style={{marginTop:"1rem"}}>The universe revolves around Rim.</Text>
                </Mobile>
                <Btn>
                    <Actions>
                            {account ? (
                                <Button
                                variant='tertiary'
                                id="harvest-all"
                                disabled={balancesWithValue.length <= 0 || pendingTx}
                                onClick={harvestAllFarms}
                                fullWidth
                                >
                                {pendingTx
                                    ? TranslateString(548, 'Collecting Rim')
                                    : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
                         </Button>
                            ) : (
                        <UnlockButton variant='tertiary' />
                            )}
                    </Actions>
                    <Button style={{margin:"1.5rem 0 0 2rem"}}>Trade Now</Button>
                </Btn>
               
                {/* <Img />  */}
            </Left>
                <Right 
                initial={{ x: 0, y: 0}}
                animate={{ x: 0, y: -20 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",
               }}
                />
            </Lower>
            {/* <MobileBar /> */}
        </Sec>
    )
}

export default Page1
