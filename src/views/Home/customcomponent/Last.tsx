import React,{useState,useCallback} from 'react'
import styled from 'styled-components'
import { Button, Heading } from '@pancakeswap-libs/uikit'
import UnlockButton from 'components/UnlockButton'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useAllHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'

const Sec = styled.section`
    display: grid;
    place-items: center;
    padding-top: 2rem;
   
`
const Actions = styled.div`
  margin-top: 24px;
`

const H = styled.h2`
    color: #EAE2FC; // ${({ theme }) => theme.colors.text}; 
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
background: ${({ theme }) => theme.colors.text};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 1.8rem;
    margin: 1rem 0 1rem 0;
    padding: 0;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 1.5rem;
    padding: 0 1rem;
      }
`;

const Tt = styled.p`
    background: ${({ theme }) => theme.colors.text};
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1rem 0 1rem 1rem;
    padding: 0;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 1.3rem;
    padding: 0 1rem;
      }
`;

const Foot = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 100%;
    
`;

const Upper = styled.div`
    display: flex;
    justify-content: space-between;
    // background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    width: 100%;
    padding: 2rem;
    align-items: center;
    flex-direction: row;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
      }
`;

const Lower = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const AboutUS = styled.div`
    ${({ theme }) => theme.mediaQueries.sm} {
          margin-top: 0rem;
      }
      margin-top: 1rem;
`;

const Help = styled.div`
     
    ${({ theme }) => theme.mediaQueries.sm} {
        margin: 0;
    }
    margin-top: 1rem;
`;

const Border = styled.div`
      border-left: 2px solid #efbb43;
`;

const Img = styled.div`
      width: 10rem;
      margin-left: 0;
      ${({ theme }) => theme.mediaQueries.sm} {
          margin-left: 5rem;
      }
`
const Hl = styled.h2`
    color: #EAE2FC;
    font-weight: 550;
    font-size: 2.5rem;
    padding: 0;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
    font-size: 1.8rem;
    padding: 0 1rem;
      }
`;

const Last = () => {
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
            <H>Start in seconds.</H>
            <T>Connect your crypto wallet to start using the app in seconds.</T>
            <T>No registration needed.</T>
            <T >Learn how to start</T>
            <Actions>
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
                        <UnlockButton variant='tertiary' mb="1rem" />
                            )}
            </Actions>
            <Foot>
            <Upper>
                <Img>
                    <img src="/images/middle.png" alt="" style={{width:"100%",height:"100%"}}/>
                </Img>
                <AboutUS>
                    <Hl>About Us</Hl>
                    <Border>
                        <Tt>Contact</Tt>
                        <Tt>Blog</Tt>
                        <Tt>Rim Token</Tt>
                    </Border>
                </AboutUS>
                <Help>
                    <Hl>Help</Hl>
                    <Border >
                        <Tt>Customer Support</Tt>
                        <Tt>Guide</Tt>
                        <Tt>Troubleshooting</Tt>
                    </Border>
                </Help>
            </Upper>
            <Lower>
            <Heading>Copyright © 2022 Rim All Right Reserved</Heading>
            </Lower>
        </Foot>
        </Sec>
    )
}

export default Last
