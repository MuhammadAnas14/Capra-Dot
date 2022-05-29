import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { SocialIcons } from "../Header/HeaderStyles";
import { Section, SectionText, Div ,Section2,Div2 } from "./FooterStyle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DiCssdeck } from "react-icons/di";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Div>
      <Section>
        <Box sx={{ width: "100%" }} style={{ marginTop: "20px" }}>
          <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
            <Grid item xs={12} md={3}>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  marginTop: "-10px",
                }}
              >
                <DiCssdeck size="5rem" />{" "}
                <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Capra Dot
                </span>
              </a>
              <SectionText>
                Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim
                minim cupidatat ullamco exercitation.
              </SectionText>
              <SocialIconsContainer>
                <SocialContainer>
                  <SocialIcons href="https://google.com">
                    <AiFillGithub color="white" size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://google.com">
                    <AiFillLinkedin color="white" size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://google.com">
                    <AiFillFacebook color="white" size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://google.com">
                    <AiFillTwitterCircle color="white" size="3rem" />
                  </SocialIcons>
                </SocialContainer>
              </SocialIconsContainer>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                align="left"
                color="white"
                fontSize="20px"
                marginBottom="20px"
              >
                Contact Info
              </Typography>
              <SectionText>
                Office No. T2, Plot No. 17/18, 3rd Floor, EOBI Building, I-8
                Markaz, Islamabad, Pakistan.
              </SectionText>
              <SectionText>+9233366267</SectionText>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="h3"
                align="left"
                color="white"
                fontSize="20px"
                marginBottom="20px"
              >
                Quick Links
              </Typography>
              <SectionText>Home</SectionText>
              <SectionText>About</SectionText>
              <SectionText>Contact US</SectionText>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                variant="h3"
                align="left"
                color="white"
                fontSize="20px"
                marginBottom="20px"
              >
                Our Service
              </Typography>
              <SectionText>Web Development</SectionText>
              <SectionText>Application Development</SectionText>
              <SectionText>Software Development</SectionText>
            </Grid>
          </Grid>
        </Box>
      </Section>
      <Div2>
      <Section2>
        <Box sx={{ width: "100%" }} style={{ marginTop: "10px" }}>
          <Grid container spacing={3} columns={12}>
            <SectionText
              >
                CapraDot © 2022
            </SectionText>
          </Grid>
        </Box>
      </Section2>
      </Div2>   
    </Div>
  );
};

export default Footer;
