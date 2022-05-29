import React from "react";
import { Section } from "../../styles/GlobalComponents/index";
import { Div } from "./AboutusStyle";
import AboutImg from "./aboutImg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { SectionTitle, SectionText, Div2  ,Div3 ,SectionText2} from "./AboutusStyle";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { CountUp } from "use-count-up";
import { MyBox, SubText, Descrp } from "./AboutStyle";
import { RobotoFont } from "../Counter/CounterFont";

const AboutUs = () => {
  const pictureStyle = {
    borderRadius: "4px",
  };
  return (
    <Div>
      <Image
        src="/images/about.jpg"
        alt="Logo Picture"
        width="100%"
        height="50%"
        layout="responsive"
      />
      <Section>
        <Box sx={{ width: "100%" }} style={{ marginTop: "20px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                variant="h1"
                align="left"
                color="#444D57"
                fontSize="32px"
              >
                About Us
              </Typography>
              <SectionText>
                Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim
                minim cupidatat ullamco exercitation. Sit enim sit irure
                incididunt Voluptate do nulla consectetur aliqua irure sunt
                dolore anim ad. Sit minim do aliqua excepteur cillum Lorem nisi
                ut amet minim minim cupidatat ullamco exercitation.
              </SectionText>
              <SectionText>
                Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim
                minim cupidatat ullamco exercitation. Sit enim sit irure
                incididunt Voluptate do nulla consectetur aliqua irure sunt
                dolore anim ad. Sit minim do aliqua excepteur cillum Lorem nisi
                ut amet minim minim cupidatat ullamco exercitation.
              </SectionText>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Div2>
                <Image
                  src="/images/stech-about.jpg"
                  alt="Logo Picture"
                  width="960px"
                  height="640px"
                  layout="responsive"
                  styled={pictureStyle}
                />
              </Div2>
            </Grid>
          </Grid>
        </Box>
      </Section>

      <Container>
        <Typography
          variant="h1"
          align="center"
          color="#444D57"
          marginTop="20px"
        >
          We Are
        </Typography>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={2}>
            <MyBox>
              <div
                style={{
                  alignItem: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/Comittment.png"
                  alt="commit Picture"
                  width="100px"
                  height="100px"
                />
              </div>
              <Typography variant="h1" align="center" color="#4275BA">
                <Typography variant="h3" component={SubText}>
                  Committed
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="grey"
                component={Descrp}
                fontSize="12px"
              >
                To provide excellence
              </Typography>
            </MyBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <MyBox>
              <div
                style={{
                  alignItem: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/Comittment.png"
                  alt="commit Picture"
                  width="100px"
                  height="100px"
                />
              </div>
              <Typography variant="h1" align="center" color="#4275BA">
                <Typography variant="h3" component={SubText}>
                  Customizable
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="grey"
                component={Descrp}
                fontSize="12px"
              >
                To cater to your problem, the way you want it to be done
              </Typography>
            </MyBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <MyBox>
              <div
                style={{
                  alignItem: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/Comittment.png"
                  alt="commit Picture"
                  width="100px"
                  height="100px"
                />
              </div>
              <Typography variant="h1" align="center" color="#4275BA">
                <Typography variant="h3" component={SubText}>
                  Integratable
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="grey"
                component={Descrp}
                fontSize="12px"
              >
                With any infrastructure that you own
              </Typography>
            </MyBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <MyBox>
              <div
                style={{
                  alignItem: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/Comittment.png"
                  alt="commit Picture"
                  width="100px"
                  height="100px"
                />
              </div>
              <Typography variant="h1" align="center" color="#4275BA">
                <Typography variant="h3" component={SubText}>
                  Evolving
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="grey"
                component={Descrp}
                fontSize="12px"
              >
                To improve ourselves and our technology constantly
              </Typography>
            </MyBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <MyBox>
              <div
                style={{
                  alignItem: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/Comittment.png"
                  alt="commit Picture"
                  width="100px"
                  height="100px"
                />
              </div>
              <Typography variant="h1" align="center" color="#4275BA">
                <Typography variant="h3" component={SubText}>
                  Scalable
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="grey"
                component={Descrp}
                fontSize="12px"
              >
                According to your requirement; size, place, time is not a
                limitation
              </Typography>
            </MyBox>
          </Grid>
        </Grid>
      </Container>
      <Section>
        <Box sx={{ width: "100%" }} style={{ marginTop: "20px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={12} lg={6}>
              <Div3>
                <Image
                  src="/images/ceo.png"
                  alt="Logo Picture"
                  width="571px"
                  height="557px"
                  layout="responsive"
                  styled={pictureStyle}
                />
              </Div3>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                variant="h1"
                align="left"
                color="#444D57"
                fontSize="52px"
                marginBottom="20px"
              >
                Become a Partner of Our Company
              </Typography>
              <SectionText2>
                "Sit minim do aliqua excepteur cillum Lorem nisi ut amet minim
                minim cupidatat ullamco exercitation. Sit enim sit irure
                incididunt Voluptate do nulla consectetur aliqua irure sunt
                dolore anim ad. Sit minim do aliqua excepteur cillum Lorem nisi
                ut amet minim minim cupidatat ullamco exercitation."
              </SectionText2>
              <Typography
                variant="h3"
                align="left"
                color="black"
                fontSize="28px"
                marginBottom="20px"
              >
                Ali Haider
              </Typography>
              <Typography
                variant="h3"
                align="left"
                color="#444D57"
                fontSize="18px"
                marginBottom="20px"
              >
                CEO,Owner
                </Typography>
            </Grid>
          </Grid>
        </Box>
      </Section>
    </Div>
  );
};

export default AboutUs;
