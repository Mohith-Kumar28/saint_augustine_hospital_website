import React, { useState, useEffect } from "react";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useTranslation } from "next-i18next";
import routeLink from "~/public/text/link";
import { useText } from "~/theme/common";
import logo from "~/public/images/medical-logo.png";
import Checkbox from "./Checkbox";
import useStyles from "./form-style";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Contact() {
  const { t, i18n } = useTranslation("common");
  const curLang = "/" + i18n.language;

  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isTruthy", (value) => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      {!isDesktop && (
        <div className="flex justify-center">
          <div className="w-72  ">
            <AnchorLink href="#home">
              <img src={logo} alt="logo" />
              {/* {brand.medical.name} */}
            </AnchorLink>
          </div>
        </div>
      )}
      {!isTablet && (
        <IconButton
          href={curLang + routeLink.medical.home}
          className={classes.backtohome}
          size="large"
        >
          <span>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </span>
        </IconButton>
      )}
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom className={text.title}>
          {t("contact_title")}
        </Typography>
        <Typography className={cx(classes.desc, text.subtitle2)}>
          {t("contact_subtitle")}
        </Typography>
        <div className={classes.form}>
          <ValidatorForm
            onSubmit={handleSubmit}
            onError={(errors) => console.log(errors)}
          >
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t("form_name")}
                  variant="standard"
                  onChange={handleChange("name")}
                  name="Name"
                  value={values.name}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t("form_email")}
                  variant="standard"
                  onChange={handleChange("email")}
                  name="Email"
                  value={values.email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "This field is required",
                    "email is not valid",
                  ]}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t("form_phone")}
                  variant="standard"
                  onChange={handleChange("phone")}
                  name="Phone"
                  value={values.phone}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t("form_company")}
                  variant="standard"
                  onChange={handleChange("company")}
                  name="Company"
                  value={values.company}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  multiline
                  rows="6"
                  className={classes.input}
                  label={t("form_message")}
                  variant="standard"
                  onChange={handleChange("message")}
                  name="Message"
                  value={values.message}
                />
              </Grid>
            </Grid>
            <div className={classes.btnArea}>
              <FormControlLabel
                control={
                  <Checkbox
                    validators={["isTruthy"]}
                    errorMessages="This field is required"
                    checked={check}
                    value={check}
                    onChange={(e) => handleCheck(e)}
                    color="primary"
                  />
                }
                label={
                  <span>
                    {t("form_terms")}
                    <br />
                    <a href="#">{t("form_privacy")}</a>
                  </span>
                }
              />
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
              >
                {t("form_send")}
                <SendIcon className={classes.rightIcon} />
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
