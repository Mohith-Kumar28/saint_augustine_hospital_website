import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PlayIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SearchIcon from "@mui/icons-material/Search";
import YouTube from "react-youtube";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import imgApi from "~/public/images/imgAPI";
import yt from "~/youtube";
import useStyles from "./banner-style";
import DotsParallax from "../Parallax/Dots";

function VideoBanner() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Translation function
  const { t } = useTranslation("common");

  // Youtube player
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);

  // Search box
  const [values, setValue] = useState({
    query: "",
  });
  const { classes, cx } = useStyles();

  useEffect(() => {
    if (isDesktop) {
      /* Attention
       ** HandleScroll function to optimize site with video background may give an error log
       ** Uncaught TypeError: Cannot read property 'src' of null
       ** It's because HMR in development mode, and react-youtube need to refresh.
       ** The error log will not happen in production mode or just reload browser (development mode)
       ** You can uncomment _onPlay() function, if you don't want see error browser log.
       ** But then every changes you make, the browser will auto reload.
       */
      // _onPlay();
    }
  }, []);

  const _onEnd = (event) => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
      setPlayedCtrl(true);
    }
  };

  const _onReady = (event) => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);
    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: "http://localhost:3009",
    },
  };

  const handleChange = (event, type) => {
    setValue({ ...values, [type]: event.target.value });
  };

  return (
    <div className={classes.heroContent}>
      {!isTablet && (
        <figure className={classes.mobileCover}>
          <img
            src={"/images/hero.jpg"}
            className="object-cover"
            alt="contain"
          />
        </figure>
      )}
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography
                  variant="h3"
                  className={cx(classes.textHelper, text.title)}
                >
                  {t("medical-landing.banner_title")}
                </Typography>
              </div>
              <Typography
                className={cx(classes.subtitle, text.subtitle2)}
                variant="h5"
              >
                {t("medical-landing.banner_subtitle")}
              </Typography>
              <Paper className={classes.searchBanner}>
                <TextField
                  variant="standard"
                  className={classes.search}
                  label={isMobile ? "Search..." : "Search doctors ..."}
                  onChange={(e) => handleChange(e, "query")}
                />
                <div className={classes.action}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    {isMobile && <SearchIcon className={classes.icon} />}
                    {isDesktop && t("medical-landing.banner_search")}
                  </Button>
                </div>
              </Paper>
            </div>
          </Grid>
          {isTablet && (
            <Grid item md={6} className={classes.visualContent}>
              <div className={classes.decoBanner}>
                <div className={classes.menuBg} />
                <figure className={classes.mobileCover}>
                  <img
                    src={"/images/hero.jpg"}
                    className="object-cover md:hidden"
                    alt="contain"
                  />
                </figure>
                <div className={classes.videoBg} />
              </div>
              <div className={classes.videoWrap}>
                <div className={classes.videoFigure}>
                  <div className={classes.innerFigure}>
                    {play && !isMobile && (
                      <IconButton
                        className={classes.btnPlay}
                        onClick={_onTogglePause}
                        size="large"
                      >
                        {playCtrl ? <PauseIcon /> : <PlayIcon />}
                      </IconButton>
                    )}
                    {/* {!play || isMobile ? (
                      <img src={imgApi.medical[0]} alt="cover" />
                    ) : null} */}
                    {yt.use && (
                      // <div className={classes.video}>
                      //   {!isMobile && (
                      // <YouTube
                      //   videoId="GWvqRcfkTGg"
                      //   opts={opts}
                      //   onReady={_onReady}
                      //   onEnd={_onEnd}
                      //   onPlay={_onPlay}
                      // />
                      <>
                        <img
                          className={classes.video}
                          src={"/images/hero.jpg"}
                          alt="cover"
                        />
                      </>
                      //   )}
                      // </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={classes.parallaxBanner}>
                <DotsParallax />
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default VideoBanner;
