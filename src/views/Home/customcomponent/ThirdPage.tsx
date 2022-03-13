import React,{useState,useCallback} from 'react'
import styled from 'styled-components'
import { Heading, Text, Button } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/UnlockButton'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useAllHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import { motion } from 'framer-motion'

const Sec = styled.section`
    background-image: url('/images/page1.png');  
    min-height: 100vh;
    width: 100%;
    background-size: auto 100vh;  
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2rem;
    ${({ theme }) => theme.mediaQueries.sm} {
        justify-content: space-around;
    }
`;
const Column1 = styled.div`
      display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
        
        justify-content: space-between;
    }
`;
const Column2 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row-reverse;
        
        justify-content: space-between;
    }
`;
const Left = styled.div`
 ${({ theme }) => theme.mediaQueries.sm} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        
    }
     padding: 2rem;
`;

const Right = styled(motion.div)`
    background-image: url('/images/page3.png');  
    width: 13rem;
    height: 15rem;
    background-size: 100% 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
        width: 15rem; 
        height: 18rem;
        background-size: 100% 100%;  
        background-repeat: no-repeat;
    }
`;

const Right2 = styled(motion.div)`
    background-image: url('/images/talwar.png');  
    width: 85%;
    height: 19rem;
    background-size: 100% 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
        width: 20rem; 
        height: 20rem;
        background-size: 100% 100%;  
        background-repeat: no-repeat;
    }
`;

const Actions = styled.div`
  margin-top: 24px;
`
const Btn = styled.div`
    display: flex;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction:  row;  
        align-items: center;
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
            <Column1>
            <Left>
                <div>
                <PC>
                    <Heading color=" #EAE2FC" size="xl" bold>Trade anything. No <div>registration, no hassle.</div> </Heading>
                    <Text bold fontSize="1.3rem" style={{marginTop:"1rem"}}>Trade any token on Binance Smart Chain in seconds</Text>
                </PC>
                <Mobile>
                    <Heading color=" #EAE2FC" size="lg" bold>Trade anything. No registration, no hassle.</Heading>
                    <Text bold fontSize="1.2rem" style={{marginTop:"1rem"}}>Trade any token on Binance Smart Chain in seconds</Text>
                </Mobile>
                <Btn>
                    {/* <Actions>
                            {account ? (
                                <Button
                                id="harvest-all"
                                disabled={balancesWithValue.length <= 0 || pendingTx}
                                onClick={harvestAllFarms}
                                fullWidth
                                >
                                {pendingTx
                                    ? TranslateString(548, 'Collecting River')
                                    : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
                         </Button>
                            ) : (
                        <UnlockButton  />
                            )}
                    </Actions> */}
                    <Button variant='tertiary' style={{margin:"1.5rem 0 0 2rem"}}>Trade Now</Button>
                    <Text style={{margin:"2rem 0 0 1rem"}}>Learn More</Text>
                </Btn>
                </div>
                {/* <Img />  */}
            </Left>
            <Right 
                initial={{ x: 0, y:0}}
                animate={{ x: 20, y: -10 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",
            }}
            />
                
            </Column1>

             
            <Column2>
            <Left>
                <div>
                <PC>
                    <Heading color=" #EAE2FC" size="xl" bold>Earn passive income<div>with crypto.</div> </Heading>
                    <Text bold fontSize="1.3rem" style={{marginTop:"1rem"}}>Rim makes it easy to make your crypto work for you.</Text>
                </PC>
                <Mobile>
                    <Heading color=" #EAE2FC" size="lg" bold>Earn passive incomewith crypto.</Heading>
                    <Text bold fontSize="1.2rem" style={{marginTop:"1rem"}}>Rim makes it easy to make your crypto work for you</Text>
                </Mobile>
                <Btn>
                    {/* <Actions>
                            {account ? (
                                <Button
                                id="harvest-all"
                                disabled={balancesWithValue.length <= 0 || pendingTx}
                                onClick={harvestAllFarms}
                                fullWidth
                                >
                                {pendingTx
                                    ? TranslateString(548, 'Collecting River')
                                    : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
                         </Button>
                            ) : (
                        <UnlockButton  />
                            )}
                    </Actions> */}
                    <Button variant='tertiary' style={{margin:"1.5rem 0 0 2rem"}}>Explore</Button>
                    <Text style={{margin:"2rem 0 0 1rem"}}>Learn More</Text>
                </Btn>
                </div>
                {/* <Img />  */}
            </Left>
            <Right2 
                initial={{ x: 0, y:0}}
                animate={{ x: -20, y: -10 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",}}
            />
            </Column2>
        </Sec>
    )
}

export default Page1
