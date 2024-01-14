import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './action-style';

function CallAction() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container alignItems="center">
            <Grid item lg={8} md={7} xs={12}>
              <Typography variant="h4" gutterBottom display="block">
                {t('medical-landing.cta_title')}
              </Typography>
              <Typography display="block">
                {t('medical-landing.cta_subtitle')}
              </Typography>
            </Grid>
            <Grid item lg={4} md={5} xs={12}>
              <Grid container justifyContent="flex-end">
                <Button size="large" variant="contained" color="primary" href={curLang + link.medical.contact} className={classes.button}>
                  {t('medical-landing.cta_btn')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}

export default CallAction;
