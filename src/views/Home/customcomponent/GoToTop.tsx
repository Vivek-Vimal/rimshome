import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsBoxArrowUp } from 'react-icons/bs';
// import { Link, animateScroll as scroll } from "react-scroll";

const ShowButton = styled.a`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e) ;
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 2rem ;
    bottom: 5rem;
    display: grid;
    place-items: center;
    
`

const GoToTop = () => {

    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  

    return (
        <>
        { showButton ? 
          
            <ShowButton
            //   type="button"
            //   to="/" spy={true} smooth={true}
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
        </>
    )
}

export default GoToTop
