import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Image } from "react-bootstrap";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "../../styles/GlobalComponents/Button";
import {BgPic} from './ToRedirectStyle'
// Images
// import bgImage from "../../../public/waves-white.svg"
function ToRedirect() {
  return (
    <Box component="section" sx={{overflow:"hidden"}} >
      <Box
        variant="gradient"
        bgColor="dark"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        
      <Container sx={{ position: "relative", zIndex: 2, py: 12,bgcolor: "black",borderRadius:8 }} >
        <BgPic>
           <Image 
            src="/waves-white.svg"
            alt="Logo Picture"
            width="100%"
            position= 'absolute'
            sx={{overflow:"hidden"}}
            />
       </BgPic>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <Typography variant="h3" color="white">
             Are You Looking For A Website
            </Typography>
            <Typography variant="h3" color="white" mb={1}>
             Mobile Application? ML?  &amp; AI?
            </Typography>
            <Typography variant="body2" color="white" mb={6}>
              Cause if you do, you are in the right place. Hit the button below to navigate to
              Contact Us page where you can find the best rates in a short delivery time. Give us a try and comeback to us again!
            </Typography>
            <Button
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Get Your Website
            </Button>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default ToRedirect;
