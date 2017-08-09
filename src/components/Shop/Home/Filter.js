import React from 'react';
import styled from 'styled-components';

const Filter = () => (
  <Section>
    <FilterTitle>Shop By Category:</FilterTitle>
    <OptionsList>
      <FilterOptions>Custom</FilterOptions>
      <FilterOptions>Mid tech</FilterOptions>
      <FilterOptions>edc</FilterOptions>
      <FilterOptions>bushcraft</FilterOptions>
      <FilterOptions>fixed blade</FilterOptions>
      <FilterOptions>folding</FilterOptions>
      <FilterOptions>tactical</FilterOptions>
    </OptionsList>
  </Section>
)

export default Filter;

const Section = styled.section`
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
`
const FilterTitle = styled.div`
  ${props => props.theme.secondaryFont({})};
  color: white;
  font-size: 22pt;
`
const OptionsList = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 0 20px;
`

const FilterOptions = styled.div`
  font-weight: 600;
  color: white;
  font-size: 16pt;
  padding: 0 15px;
  text-transform: uppercase;
  letter-spacing: 1.5pt;
  border-right: 1px solid white;
  cursor: pointer;
  &:last-of-type {
    border-right: none;
  }
  &:hover {
    color: ${props => props.theme.main};
  }
`
