import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "next-i18next";
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from "~/lib/getStatic";
import brand from "~/public/text/brand";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Notification from "~/components/Notification";

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles({ uniqId: "blank" })((theme) => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    background:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("lg")]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  containerWrap: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    "& > section": {
      position: "relative",
    },
  },
}));

function BlankPage(props) {
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <Head>
        <title>{brand.medical.name + " - Blank page"}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
        <main className={classes.containerWrap}>
          <section className={cx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
              {t("title")}
            </Typography>
            <Typography variant="h4" align="center">
              {t("subtitle")}
            </Typography>
          </section>
        </main>
        <section className={classes.spaceTop}>
          <Footer />
        </section>
        <Notification />
      </div>
    </React.Fragment>
  );
}

BlankPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

export default BlankPage;
