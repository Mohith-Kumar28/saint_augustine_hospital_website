import React, { useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Carousel from "react-slick";
import PrevIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "next-i18next";
import imgApi from "~/public/images/imgAPI";
import useStyles from "./facilities-style";
import TitleIcon from "../Title/WithIcon";
import Card from "../Cards/Default";
import DotsParallax from "../Parallax/Dots";

const facilityList = [
  // {
  //   title: "B.SC NURSING AND DMLT COURSES AVAILABLE",
  //   desc: "Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.",
  //   img: imgApi.medical[3],
  // },
  {
    title: "Pharmacy",
    desc: "he hospital has got 24*7 Pharmacy with medicines and medical apparatus of trusted companies and skilled pharamacist.",
    img: imgApi.medical[6],
  },
  {
    title: "Canteen",
    desc: "There is a Canteen within the hospital providing home like food and other daily used items. It prepares food for the patient according to the specially prescribed by the doctors.",
    img: imgApi.medical[6],
  },
  {
    title: "Parking",
    desc: "The hospital has got good parking facility with guidance of security staff",
    img: imgApi.medical[6],
  },
  {
    title: "FIRE FIGHTING SYSTEM",
    desc: "The hospital has got well equipped fire fighting system  and advanced machines which may be a live saver during emergency.",
    img: imgApi.medical[6],
  },
  {
    title: "PROFICIENT NURSE",
    desc: "The hospital has got Nursing, technical, laboratory staff  with various fields such as B.Sc Nursing, ANM, GNM, DMLT etc with a good experience and fantastic skill.",
    img: imgApi.medical[5],
  },
  {
    title: "TRAINED SECURITY",
    desc: "The hospital has got two different types of security from agency and of it's own.",
    img: imgApi.medical[4],
  },
  {
    title: "DENTAL FACILITY",
    desc: "The hospital is specialised in dental facility with specialised machinery, experienced Dentist, supporting staff etc.",
    img: imgApi.medical[3],
  },
  {
    title: "CCTV SURVEILLENCE",
    desc: "The hospital has 24*7 CCTV surveillance with high definition recording & clear night vision present everywhere in the hospital",
    img: imgApi.medical[2],
  },
  {
    title: "PHYSIOTHERAPY",
    desc: "The hospital have got a Physiotherapy department with various specialised equipments.",
    img: imgApi.medical[2],
  },
];

function Facilities() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes } = useStyles();
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (theme.direction === "ltr" && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(facilityList.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <DotsParallax />
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
            {facilityList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Card
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  button={t("medical-landing.services_button")}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon
              text={t("medical-landing.services_title")}
              icon="library_add"
              extended
            />
            <nav className={classes.arrow}>
              <Fab
                size="small"
                onClick={() => slider.current.slickNext()}
                aria-label="prev"
                className={classes.margin}
              >
                <PrevIcon />
              </Fab>
              <Fab
                size="small"
                onClick={() => slider.current.slickPrev()}
                aria-label="next"
                className={classes.margin}
              >
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Facilities;
