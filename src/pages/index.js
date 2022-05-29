import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../Screens/AboutUs/Aboutus';
import Acomplishments from '../Screens/Acomplishments/Acomplishments';
import BgAnimation from '../Screens/BackgroundAnimation/BackgroundAnimation'
import Main from '../Screens/Main/Main'
import Projects from '../Screens/Projects/Projects';
import Slider from '../Screens/Services/Services';
import Technologies from '../Screens/Technologies/Technologies';
import Timeline from '../Screens/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import OurTeam from '../Screens/OurTeam/OurTeam';
import ContactUs from '../Screens/ContactUs/Contactus';
import Bg from '../Screens/BackgroundAnimation/Bg';
import Counters from '../Screens/Counter/Counter';
import Divider from "@mui/material/Divider";
import ToRedirect from '../Screens/ToRedirect/ToRedirect'
import LandingContent from '../Screens/LandingContent/LandingContent';
import WebDev from '../Screens/Services/SubServices/WebDev/WebDev';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Main />
        <Bg />
      </Section>
      <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
      <Counters/>
      <LandingContent/>
      <ToRedirect/>
      <Slider/>
      <OurTeam />
    </Layout>
  );
};

export default Home;
