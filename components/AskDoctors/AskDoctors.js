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
  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  function handleListItemClick(event, role) {
    // If "All" is selected, show all doctors
    if (role === "All") {
      setFilteredDoctors(doctorsData);
    } else {
      // Filter the doctors based on the selected role
      const filtered = doctorsData.filter((doctor) => doctor.role === role);
      setFilteredDoctors(filtered);
      console.log(filtered);
    }

    setSelectedIndex(role);
  }

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
            setDoctorsData(result.data);
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

  // Extract unique roles from doctorsData
  const uniqueRoles = [
    "All",
    ...Array.from(new Set(doctorsData.map((doctor) => doctor.role))),
  ];

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
                  {/* <ListItem
                    button
                    className={cx(
                      classes.filter,
                      selectedIndex === "All" && classes.active
                    )}
                    onClick={(event) => handleListItemClick(event, "All")}
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
