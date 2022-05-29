import styled from "styled-components";
// import {S1} from '../../../public/images/shape1.png';
// import S2 from '../../../public/images/shape2.png';
// import S1 from './shape1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Responsive ={
    0:{
        items:1,
        margin:15,
    },
    580:{
        items:2,
        margin:10,
    },
    768:{
        items:2,
        margin:4,
    },
    900:{
        items:3,
        margin:10,
    },
    1200:{
        items:4 ,
        // margin:10,
    },
    1400:{
        items:4,
        margin:20,
    },
}

export const Item = styled.div`

    box-shadow: 0 10px 10px 0 rgb(0 0 30 /20%);
    height: 35rem;
    border-radius:130px;
    text-align:center;
    width:24rem;
    background: #fff;
    padding: 3rem;
    margin-top:20px;
    margin-bottom:20px;
    color: black;
    transition: .5s all ease-in-out;
    transition-delay:0.4s all ease-in-out .3s;
    font-family: Arial, Helvetica, sans-serif; 
    // linear-gradient(270deg,#00dbd87d 0%,#b133ffb0 80%) !important
    &:hover {
        color: #fff;
        background: ${({ alt }) => alt ? 'linear-gradient(270deg, #00dbd87d 0%, #B133FFb0 80%)' : 'linear-gradient(270deg, #00dbd87d 0%, #B133FFb0 80%)'};
        // background-image: url(shape1.png);
        // opacity: 1;
        cursor: pointer;
        transition-delay:0.5s all ease-in-out .5s;
        transition: .5s all ease-in-out;    
      }

    @media ${(props) => props.theme.breakpoints.md} {
        margin: 0 auto;
      }
`

export const SubText = styled.div`
    font-size: 1.5rem;
`

export const IconHandler = styled.div`
      color:black;
      width:70%;
      display: inline-table;
      padding:20px;
      background:white;
      border-radius: 80%;
`