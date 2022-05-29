import React from 'react';
import Image from 'next/image'
import { Section, SectionText,SectionText2, SectionTitle } from '../Style';
import { LeftSection } from '../../../Main/MainStyles';
import { Main, Main2,PicDiv,PicDiv1 } from '../Style';
import Header from '../../../Header/Header'
const WebDev = (props) => (
  <>
  <Header/>
  <Main>
  <Section grid>
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome to Capra Dot
    </SectionTitle>
    <SectionText>
      Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim minim
      cupidatat ullamco exercitation. Sit enim sit irure incididunt 
      Voluptate do nulla consectetur aliqua irure sunt dolore anim ad.
    </SectionText>
  </LeftSection>
  </Section>
  <PicDiv>
  <Image 
        src="/try2.svg"
        width="100%"
        alt="Logo Picture"
        height="100%"
        layout="responsive" 
        objectFit="contain"
        />
  </PicDiv>
  </Section>
  </Main>
  <Main2>
    <Section grid>
      <>
    <LeftSection>
    <PicDiv1>
  <Image 
        src="/try2.svg"
        width="100%"
        alt="Logo Picture"
        height="100%"
        layout="responsive" 
        objectFit="contain"
        />
  </PicDiv1>
    </LeftSection>
    </>
    <>
    <Section>
    <SectionTitle main center>
    Welcome to Capra Dot
    </SectionTitle>
    <SectionText2>
      Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim minim
      cupidatat ullamco exercitation. Sit enim sit irure incididunt 
      Voluptate do nulla consectetur aliqua irure sunt dolore anim ad.
    </SectionText2>
    </Section>
    </>
    </Section>
  </Main2>
  <Main>
  <Section grid>
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome to Capra Dot
    </SectionTitle>
    <SectionText>
      Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim minim
      cupidatat ullamco exercitation. Sit enim sit irure incididunt 
      Voluptate do nulla consectetur aliqua irure sunt dolore anim ad.
    </SectionText>
  </LeftSection>
  </Section>
  <PicDiv>
  <Image 
        src="/try2.svg"
        width="100%"
        alt="Logo Picture"
        height="100%"
        layout="responsive" 
        objectFit="contain"
        />
  </PicDiv>
  </Section>
  </Main>
  
  <Main2>
    <Section grid>
      <>
    <LeftSection>
    <PicDiv1>
  <Image 
        src="/try2.svg"
        width="100%"
        alt="Logo Picture"
        height="100%"
        layout="responsive" 
        objectFit="contain"
        />
  </PicDiv1>
    </LeftSection>
    </>
    <>
    <Section>
    <SectionTitle main center>
    Welcome to Capra Dot
    </SectionTitle>
    <SectionText2>
      Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim minim
      cupidatat ullamco exercitation. Sit enim sit irure incididunt 
      Voluptate do nulla consectetur aliqua irure sunt dolore anim ad.
    </SectionText2>
    </Section>
    </>
    </Section>
  </Main2>
  </>
);

export default WebDev;