import React from 'react';
import styled from 'styled-components';

const Filter = () => (
  <Section>
    <FilterTitle>Shop By Category:</FilterTitle>
    <OptionsList>
      <FilterOption>Custom</FilterOption>
      <FilterOption>Mid tech</FilterOption>
      <FilterOption>edc</FilterOption>
      <FilterOption>bushcraft</FilterOption>
      <FilterOption>fixed blade</FilterOption>
      <FilterOption>folding</FilterOption>
      <FilterOption>tactical</FilterOption>
    </OptionsList>
  </Section>
)

export default Filter;

const Section = styled.section`
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 7px;
  flex-wrap:nowrap;
  ${props => props.theme.media.desktop} {
    justify-content: center;
    height: 70px;
  }
`
const FilterTitle = styled.div`
  ${props => props.theme.secondaryFont({})};
  color: white;
  font-size: 18pt;
  flex-shrink: 0;
  ${props => props.theme.media.desktop} {
    font-size: 22pt;
    width: 150px;
  }
`
const OptionsList = styled.div`
  margin: 5px 0 0 10px;
  white-space: nowrap;
  overflow: scroll;
  ${props => props.theme.media.desktop} {
    display: flex;
    align-items: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const FilterOption = styled.div`
  font-weight: 600;
  color: white;
  font-size: 12pt;
  padding: 0 12px;
  text-transform: uppercase;
  letter-spacing: 1.1pt;
  border-right: 1px solid white;
  cursor: pointer;
  display: inline-flex;
  &:last-of-type {
    border-right: none;
  }
  &:hover {
    color: ${props => props.theme.main};
  }
  ${props => props.theme.media.desktop} {
    font-size: 14pt;
  }
`
