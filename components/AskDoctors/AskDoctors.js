import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import imgAPI from "~/public/images/imgAPI";
import ProfileCard from "../Cards/Profile";
import useTitle from "../Title/title-style";
import useStyles from "./ask-doctors-style";

const doctorsData = [
  {
    avatar: imgAPI.doctors[1],
    name: "DR. RAJIV  SAIKIA",
    title: "M.B.B.S, MD (Physician)",
    role: "Physician",
    about: "",
    rating: "OPD No. 03",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[2],
    name: "DR. RAKTIM KR BORA",
    title: "M.B.B.S, DCH (Consultant Pediatrician)",
    role: "Consultant Pediatrician",
    rating: "OPD No. 02",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[3],
    name: "DR. JAHIDUR RAHMAN",
    title: "M.B.B.S, Critical Care (Anesthetist)",
    role: "Anesthetist",
    rating: "OPD No. 01",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[4],
    name: "DR. SHAH JAHAN ALI",
    title: "M.B.B.S, M.D (Gynecologist)",
    role: "Gynecologist",
    about: "",
    rating: "OPD No. 05",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[5],
    name: "SUSANTA SINGHA",
    title: "M.B.B.S, N.B (Surgeon)",
    role: "Surgeon",
    about: "",
    rating: "OPD No. 04",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[6],
    name: "DR. FIROZ IFTEKHAR AHMED",
    title: "M.B.B.S CMO, (EMERGENCY)",
    role: "EMERGENCY",
    about: "",
    rating: "",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[7],
    name: "DR. SODAGAR SINGHA",
    title: "M.B.B.S, M.S. (Orthopedics)",
    role: "Orthopedics",
    about: "",
    rating: "OPD No. 06",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[8],
    name: "DR. RAJU BASUMATARY",
    title: "M.B.B.S, (D.C.P)",
    role: "D.C.P",
    about: "",
    rating: "",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[9],
    name: "DR. SUVRADWIP BISWAS",
    title: "M.B.B.S, M.S. (ENT, Head & Neck Surgery)",
    role: "ENT, Head & Neck Surgery",
    about: "",
    rating: "OPD No. 07",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[10],
    name: "DR. ANJAN DAS",
    title: "M.B.B.S (EMERGENCY)",
    role: "EMERGENCY",
    about: "",
    rating: "",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[11],
    name: "UROLOGIST",
    title: "Visiting Doctor",
    role: "Visiting Doctor",
    about: "",
    rating: "",
    exp: 4,
  },
  {
    avatar: imgAPI.doctors[12],
    name: "CARDIOLOGIST",
    title: "Visiting Doctor",
    role: "Visiting Doctor",
    about: "",
    rating: "",
    exp: 4,
  },
];

// Extract unique roles from doctorsData
const uniqueRoles = [
  "All",
  ...Array.from(new Set(doctorsData.map((doctor) => doctor.role))),
];

function AskDoctors() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function
  const { t } = useTranslation("common");

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const [selectedIndex, setSelectedIndex] = useState("All");

  // State to store the filtered doctors based on the selected role
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  function handleListItemClick(event, role) {
    // If "All" is selected, show all doctors
    if (role === "All") {
      setFilteredDoctors(doctorsData);
    } else {
      // Filter the doctors based on the selected role
      const filtered = doctorsData.filter((doctor) => doctor.role === role);
      setFilteredDoctors(filtered);
    }

    setSelectedIndex(role);
  }

  const renderCard = (item, index) => (
    <ProfileCard
      key={index.toString()}
      name={item.name}
      title={item.title}
      avatar={item.avatar}
      rating={item.rating}
      exp={item.exp}
    />
  );

  return (
    <div className={classes.root}>
      <div className={classes.deco} />

      <Container fixed={isDesktop}>
        <Grid container spacing={isDesktop ? 3 : 0} justifyContent="center">
          <Grid item md={2} sm={9} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={-100}
              delay={200}
              duration={0.3}
            >
              <div className={classes.sideFilter}>
                <Typography variant="h4" className={title.primary}>
                  {t("medical-landing.ask_doctors")}
                </Typography>
                <List component="nav">
                  {/* <ListItem
                    className={cx(
                      classes.filter

                      // selectedIndex === item.role && classes.active
                    )}
                    onClick={(event) => {
                      setSelectedIndex("all"), setFilteredDoctors(doctorsData);
                    }}
                  >
                    <ListItemText primary={"All "} />
                  </ListItem> */}
                  {uniqueRoles.map((role, index) => (
                    <ListItem
                      button
                      key={index.toString()}
                      className={cx(
                        classes.filter,
                        selectedIndex === role && classes.active
                      )}
                      onClick={(event) => handleListItemClick(event, role)}
                    >
                      <ListItemText primary={role} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item lg={8} md={10} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={isDesktop ? 6 : 4}>
                {filteredDoctors.map((item, index) => (
                  <Grid item sm={6} xs={12} key={index.toString()}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInUpShort"
                      offset={-100}
                      delay={index * 200}
                      duration={0.4}
                    >
                      <div>{renderCard(item, index)}</div>
                    </ScrollAnimation>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AskDoctors;
