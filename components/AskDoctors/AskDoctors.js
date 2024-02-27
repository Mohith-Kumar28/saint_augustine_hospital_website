import React, { useState, useEffect } from "react";
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
import ProfileCard from "../Cards/Profile";
import useTitle from "../Title/title-style";
import useStyles from "./ask-doctors-style";
import Papa from "papaparse";
import imgAPI from "~/public/images/imgAPI";

function AskDoctors() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");
  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const [selectedIndex, setSelectedIndex] = useState("All");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const doctorsData = [
    {
      avatar: imgAPI.doctors[0],
      name: "DR. RAJIV  SAIKIA",
      title: "M.B.B.S, MD (Physician)",
      role: "Physician",
      about:
        "MBBS, MD (Internal Medicine), More than 16 yrs experience as Medicine Specialist, different parts & position.",
      rating: "OPD No. 03",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[1],
      name: "DR. RAKTIM KR BORA",
      title: "M.B.B.S, DCH (Consultant Pediatrician)",
      role: "Consultant Pediatrician",
      rating: "OPD No. 02",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[2],
      name: "DR. JAHIDUR RAHMAN",
      title: "M.B.B.S, Critical Care (Anesthetist)",
      role: "Anesthetist",
      rating: "OPD No. 01",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[3],
      name: "DR. SHAH JAHAN ALI",
      title: "M.B.B.S, M.D (Gynecologist)",
      role: "Gynecologist",
      about:
        "I have passed out from Guwahati Medical College both MBBS and MD in obstetrics and gynaecology. I am working in the field of obstetrics and gynaecology since 2009 . Presently I am working in st Agustine hospital.My field of interest is in high risk pregnancy.",
      rating: "OPD No. 05",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[4],
      name: "SUSANTA SINGHA",
      title: "M.B.B.S, N.B (Surgeon)",
      role: "Surgeon",
      about: "",
      rating: "OPD No. 04",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[5],
      name: "DR. FIROZ IFTEKHAR AHMED",
      title: "M.B.B.S CMO, (EMERGENCY)",
      role: "EMERGENCY",
      about: "",
      rating: "",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[6],
      name: "DR. SODAGAR SINGHA",
      title: "M.B.B.S, M.S. (Orthopedics)",
      role: "Orthopedics",
      about: "",
      rating: "OPD No. 06",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[7],
      name: "DR. RAJU BASUMATARY",
      title: "M.B.B.S, (D.C.P)",
      role: "D.C.P",
      about: "",
      rating: "",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[8],
      name: "DR. SUVRADWIP BISWAS",
      title: "M.B.B.S, M.S. (ENT, Head & Neck Surgery)",
      role: "ENT, Head & Neck Surgery",
      about: "",
      rating: "OPD No. 07",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[9],
      name: "DR. ANJAN DAS",
      title: "M.B.B.S (EMERGENCY)",
      role: "EMERGENCY",
      about: "",
      rating: "",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[10],
      name: "⁠DR. ARUNAV BARMA",
      title: "B.D.S.",
      role: "B.D.S.",
      about: "",
      rating: "",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[11],
      name: "⁠DR. THANGSANG PUI",
      title: "Designation: M.B.B.S (EMERGENCY)",
      role: "EMERGENCY",
      about: "",
      rating: "",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[12],
      name: "UROLOGIST",
      title: "Visiting Doctor",
      role: "Visiting Doctor",
      about: "",
      rating: "",
      exp: 4,
    },
    {
      avatar: imgAPI.doctors[13],
      name: "CARDIOLOGIST",
      title: "Visiting Doctor",
      role: "Visiting Doctor",
      about: "",
      rating: "",
      exp: 4,
    },
  ];

  useEffect(() => {
    const asyncFetch = async () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRuv0meN32gExglqFtY_Sob3NEgqIw-uuORdLuxbCWiBt-BpIRSrb8h4Y5yb4IDZaYJjnNnA7L-_R_R/pub?output=csv";
      try {
        const response = await fetch(csvUrl);
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            setFilteredDoctors(result.data);
            console.log("doctors", result.data);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    asyncFetch();
  }, []);

  function handleListItemClick(event, role) {
    setSelectedIndex(role);
  }

  const renderCard = (item, index) => (
    <ProfileCard
      key={index.toString()}
      name={item.name}
      title={item.title}
      about={item.about}
      avatar={item.avatar ? item.avatar : imgAPI.doctors[2]}
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
                  <ListItem
                    button
                    className={cx(
                      classes.filter,
                      selectedIndex === "All" && classes.active
                    )}
                    onClick={(event) => handleListItemClick(event, "All")}
                  >
                    <ListItemText primary={"All "} />
                  </ListItem>
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
