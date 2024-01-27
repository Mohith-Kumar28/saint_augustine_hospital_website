import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import useStyles from "./counter-style";

function Counter() {
  const { t } = useTranslation("common");
  const { classes, cx } = useStyles();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid sm={4} item>
            <div className={cx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">+10</Typography>
                <Typography component="p">
                  {t("medical-landing.about_clinics")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={cx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">+12</Typography>
                <Typography component="p">
                  {t("medical-landing.about_doctor")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h2">24</Typography>
                <Typography component="p">
                  {t("medical-landing.about_hours")}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
