import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { CountUp } from "use-count-up";
import { MyBox,SubText,Descrp } from "./CounterStyle";
import {RobotoFont} from "./CounterFont";


function Counters() {
  return (
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <MyBox>
            <Typography variant="h1" align="center" color="#4275BA">
            <RobotoFont>
            <CountUp isCounting end={22} duration={1.2} />+
            </RobotoFont>
            <Typography variant="h3" component={SubText}>
            Customers
            </Typography>
            </Typography>
            <Typography variant="h6" align="center" color="grey" component={Descrp}>
            Mix the sections, change the colors and unleash your creativity
            </Typography>
            </MyBox>
          </Grid>
          <Grid item xs={12} md={4} >
            <MyBox>
            <Typography variant="h1" align="center" color="#4275BA">
            <CountUp isCounting end={75} duration={1.2} />+
            <Typography variant="h3" component={SubText}>
            Projects
            </Typography>
            </Typography>
            <Typography variant="h6" align="center" color="grey" component={Descrp}>
            Mix the sections, change the colors and unleash your creativity
            </Typography>
            </MyBox>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
          <MyBox>
          <Typography variant="h1" align="center" color="#4275BA">
          <CountUp isCounting end={81} duration={1.2} />+
          <Typography variant="h3" component={SubText}>
            Services
            </Typography>
          </Typography>
          <Typography variant="h6" align="center" color="grey" component={Descrp}>
            Mix the sections, change the colors and unleash your creativity
            </Typography>
          </MyBox>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Counters;
