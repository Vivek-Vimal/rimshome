import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'

const StyledMobileBar = styled.div`
    height: 4.5rem;
    width: 100%;
     position: fixed !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    z-index: 9;
    background-color: ${({ theme }) => theme.colors.background} ;
    padding: 0 1rem;
    ${({ theme }) => theme.mediaQueries.sm} {
        display: none;
    }
    
`


const MobileBar = () => {
    return (
        <StyledMobileBar>
            <Text fontSize="1.2rem">Trade</Text>
            <Text fontSize="1.2rem">Farms</Text>
            <Text fontSize="1.2rem">Pools</Text>
        </StyledMobileBar>
    )
}

export default MobileBar
