import React from 'react'
import styled, {keyframes} from 'styled-components'


const Container = styled.div`
  overflow: hidden;
  height: 70px;
  width: 700px;
  margin: 100px;
  background: white;
  border: 20px solid white;
`

const RollText = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100%, 0); }
`

const RollingText = styled.div`
  animation: ${RollText} infinite 35s linear;
  width: fit-content;
  white-space: nowrap;
  padding-left: 100%;
  font-weight: bold;
`


export default function Crawl (props) {
  return (
    <>
      <Container>
        <RollingText>{props.text}</RollingText>
      </Container>
    </>
  )
}


