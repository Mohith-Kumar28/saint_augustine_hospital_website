import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react18";
import { useTranslation } from "next-i18next";
import ParallaxOval from "../Parallax/Oval";
import AddressCard from "../Cards/Address";
import useText from "../Title/title-style";
import useStyles from "./clinics-style";

function MapContainer(props) {
  const { google } = props;
  return (
    <Map
      google={google}
      style={{ width: "100%", height: "700px", position: "relative" }}
      initialCenter={{ lat: 40.553076, lng: 16.21 }}
      zoom={8}
    >
      <Marker position={{ lat: 40.933076, lng: 15.629058 }} />
      <Marker position={{ lat: 40.815, lng: 15.9819 }} />
      <Marker position={{ lat: 40.953076, lng: 16.21 }} />
      <Marker position={{ lat: 40.92, lng: 16.98 }} />
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

const clinicData = [
  {
    name: "Sr. Shiny Mathew Olickal (OSA)",
    // phone: '+123 456 78 91',
    email: "ahchapaguri@gmail.com",
    // address: 'Lorem ipsum street no.14 Block A'
  },
  {
    name: "Registration Ph. No.",
    phone: "+91 6901787830",
    // email: 'hello@luxi.com',
    // address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    name: "OPD Ph. No.",
    phone: "+91 6002348850",
    // email: 'hello@luxi.com',
    // address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    name: "Emergency Ph. No.",
    phone: "+91 9394649400",
    // email: 'hello@luxi.com',
    // address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  // {
  //   name: 'Mother and Baby Care',
  //   phone: '+123 456 78 91',
  //   email: 'hello@luxi.com',
  //   address: 'Lorem ipsum street no.14 Block A'
  // },
  // {
  //   name: 'Orthopedic Clinic',
  //   phone: '+123 456 78 91',
  //   email: 'hello@luxi.com',
  //   address: 'Lorem ipsum street Block C - Vestibullum Building'
  // }
];

function MapAdress() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // Translation Function
  const { t } = useTranslation("common");
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.parallaxBottom}>
        <ParallaxOval />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          {isDesktop && <Grid item lg={1} />}
          <Grid item lg={5} md={6} xs={12}>
            <Box mt={5}>
              <Typography variant="h4" className={text.primary}>
                {t("medical-landing.clinic_title")}
              </Typography>
            </Box>
            <div className={classes.block}>
              {clinicData.map((item, index) => (
                <div key={index.toString()}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInLeftShort"
                    offset={-30}
                    delay={index * 200}
                    duration={0.3}
                  >
                    <div>
                      <AddressCard
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        address={item.address}
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.map} elevation={10}>
              {/* <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "700px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              /> */}
              {/* <iframe
                width="100%"
                height="100%"
                class="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
              ></iframe> */}

              {/* <div> */}
              <iframe
                className="w-full h-full"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ST.%20Augustine%20Hospital%20Multispeciality%20Dental%20Care+(ST.%20Augustine%20Hospital%20Multispeciality%20Dental%20Care)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              {/* </div> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MapAdress;
