import React from "react";
import { AiFillAndroid, AiOutlineCloud,AiOutlineDesktop } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { Section, SectionText, SectionTitle, TextStyle,SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import Link from 'next/link'
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { Item, Responsive,SubText,IconHandler } from "./ServicesStyle";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider(props) {
  const RedirectPage = () =>{
    
  }
  return (
    <div>
      <br/>
      <Section>
      <SectionTitle>
        What We Do !
      </SectionTitle>
      <br/>
      <OwlCarousel
      className="owl-theme"
      loop 
      nav={true}
        navText={[
            '<span class="arrow prev">‹</span>',
            '<span class="arrow next">›</span>'
          ]}
      // navClass={["&#x27;owl-prev&#x27;,&#x27;owl-next&#x27;"]}
      // navText={["hjello","hello"]}
      responsive={Responsive}
      autoplay={false}
      dots={true}
      autoHeight={true}
      dotsEach
      autoplayTimeout={2000}
      autoplaySpeed={2000}
      autoplayHoverPause={false}
      >
        <Item >
          <IconHandler>
          <AiFillAndroid size={80} />
          </IconHandler>
          <h3>Lorem ispum</h3><br/>
          <SubText>
            <li>Anim fugiat elit</li>
            <li>esse minim eu  </li> 
            <li>consectetur aliqu  </li> 
          </SubText>
          <Link href='/Services'>
          <a>Link me</a>
          </Link>
        </Item>
        <Item >
        <IconHandler>
          <GiBrain size={80} />
        </IconHandler>
          <h3>Lorem ispum</h3><br/>
          <SubText>
            <li>Anim fugiat elit</li>
            <li>esse minim eu  </li> 
            <li>consectetur aliqu  </li> 
          </SubText>
        </Item>
        <Item >
        <IconHandler>
          <AiOutlineDesktop size={80} />
         </IconHandler>  
          <h3>Lorem ispum</h3><br/>
          <SubText>
            <li>Anim fugiat elit</li>
            <li>esse minim eu  </li> 
            <li>consectetur aliqu</li> 
          </SubText>
        </Item>
        <Item >
        <IconHandler> 
          <MdDeveloperMode size={80}/>
          </IconHandler> 
          <h3>Lorem ispum</h3><br/>
          <SubText>
            <li>Anim fugiat elit</li>
            <li>esse minim eu  </li> 
            <li>consectetur aliqu  </li> 
          </SubText>
        </Item>
        <Item >
        <IconHandler>
          <AiOutlineCloud size={80} />
        </IconHandler>
          <h3>Lorem ispum</h3><br/>
          <SubText>
            <li>Anim fugiat elit</li>
            <li>esse minim eu  </li> 
            <li>consectetur aliqu  </li> 
          </SubText>
        </Item>
     </OwlCarousel>
     </Section>
     <br/>
    </div>
  );
}