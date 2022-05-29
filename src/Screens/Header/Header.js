import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
// import {Container} from 'react-bootstrap'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <a style={{ display: 'flex', alignItems: 'center', color:"black" }}>
          <DiCssdeck size="4rem" /> <span>Capra Dot</span>
    </a>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Home Page</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/Services">
          <NavLink>Our Services</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/AboutUs">
          <NavLink>About Us</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="/OurTeam">
          <NavLink>Our Team</NavLink>
        </Link>
      </li>   
      <li>
        <Link href="/Portfolio">
          <NavLink>Portfolio</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="/ContactUS">
          <NavLink>Contact Us</NavLink>
        </Link>
      </li>   
    </Div2>
  </Container>
);

export default Header;
