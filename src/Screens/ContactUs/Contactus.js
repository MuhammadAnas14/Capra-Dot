import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { TextField  } from "@mui/material";
import Button from "../../styles/GlobalComponents/Button";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <Typography variant="h3" mb={1}>
            Contact Us
          </Typography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <Box width="100%" component="form" method="post" autocomplete="off">
            <Box p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField variant="standard" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="standard-basic" variant="standard" label="Last Name" fullWidth size="Normal" />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="standard" type="email" label="Email Address" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="standard" label="Your Message" multiline fullWidth rows={6} />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}>
                  <Switch checked={checked} onChange={handleChecked} />
                  <Typography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    Terms and Conditions
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
              <Button
              variant="gradient"
              color="info"
              size="small"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >Send Message</Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormSimple;