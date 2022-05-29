import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './MainStyles';

const Main = (props) => (
  <>
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome to <br/>
    Capra Dot
    </SectionTitle>
    <SectionText>
      Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim minim
      cupidatat ullamco exercitation. Sit enim sit irure incididunt 
      Voluptate do nulla consectetur aliqua irure sunt dolore anim ad.
    </SectionText>
  </LeftSection>
  </Section>
  </>
);

export default Main;