import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Div = styled.div`
  margin-top:-100px;
  z-index:-1;
  position relative;
`;

export const Div2 = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
  margin-top:56px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top:0px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top:0px;
  }
`;

export const Div3 = styled.div`
  border-radius: 5px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top:0px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top:0px;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  
  font-size: ${(props) => props.main ? '65px' : '36px'};
  line-height: ${(props) => props.main ? '72px' : '36px'};
  width: max-content;
  max-width: 100%;
  background: #404750;
  -webkit-background-clip: text;
  -webkit-text-fill-color: "grey";
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '36px'};
    line-height: ${(props) => props.main ? '56px' : '436px8px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '36px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`
export const SectionText = styled.p`
  max-width: 800px;
  font-size: 16px;
  line-height: 40px;
  font-weight: 300;
  color: #73797E;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 32px;
    margin-top:8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin-top:8px;
  }
`

export const SectionText2 = styled.p`
  max-width: 800px;
  font-size: 16px;
  line-height: 40px;
  font-weight: 300;
  color: #73797E;
  font-style:italic;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 32px;
    margin-top:8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin-top:8px;
  }
`