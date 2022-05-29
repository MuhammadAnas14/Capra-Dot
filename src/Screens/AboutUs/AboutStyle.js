import styled from 'styled-components';

export const MyBox = styled.div`
    padding: 20%;

    @media ${(props) => props.theme.breakpoints.md} {
        padding:5%
      }
    
      @media ${(props) => props.theme.breakpoints.sm} {
        padding:5%
      }
`
export const SubText = styled.div`
    font-size: x-large;
    margin-top:5%
`
export const Descrp = styled.div`
    margin-top:5%;
    color: #414040d4;   
`
