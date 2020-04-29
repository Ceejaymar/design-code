import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const SectionGroup = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  gap: 20;
  height: 720px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionLogo = styled.img`
  align-self: flex-end;
  width: 120px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 40px;
  margin: 0 40px;
  grid-auto-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  justify-self: center;

  @media (max-width: 720px) {
    font-size: 40px;
    margin-top: 20px;
  }
`

const SectionText = styled.p`
  color: white;
  max-width: 720px;
  font-size: 25px;
  justify-self: center;

  @media (max-width: 1060px) {
    max-width: 480px;
    font-size: 20px;
  }

  @media (max-width: 720px) {
    width: auto;
  }
`

const WaveTop = styled.div`
  width: 100%;
  position: absolute;
  top: -7px;
  left: 0;
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: -7px;
  left: 0;
`

const Section = ({image, logo, title, text}) => (
  <SectionGroup image={image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={logo} />
    <SectionTitleGroup>
      <SectionTitle>{title}</SectionTitle>
      <SectionText>{text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
