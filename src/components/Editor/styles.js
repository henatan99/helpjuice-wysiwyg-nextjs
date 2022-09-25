import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`

export const StyledInput = (({currentStyle}) => {
    styled.input`
    ...currentStyle,
    padding: 0,
    border-width: 0,
    width: '101%',
    max-width: 'unset',
    color: '#636a76',
    margin: '-1%',
    padding-left: '1%',
    outline: 'none'
`
}) 

export const StyledModalWrapper = styled.div`
    marginTop: 0.5rem
`
