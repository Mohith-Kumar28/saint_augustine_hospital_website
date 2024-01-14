import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import LocationIcon from "@mui/icons-material/LocationOn";
import useStyles from "./cards-style";

function Address(props) {
  const { classes } = useStyles();
  const { name, phone, email, address } = props;
  return (
    <div className={classes.paperAddress}>
      <Typography variant="h6" display="block">
        {name}
      </Typography>
      <Grid container>
        {phone && (
          <>
            <Grid item md={6} xs={12}>
              {" "}
              <PhoneIcon className={classes.icon} />
              {phone}
            </Grid>
          </>
        )}
        {email && (
          <>
            <Grid item md={6} xs={12}>
              {" "}
              <EmailIcon className={classes.icon} />
              {email}
            </Grid>
          </>
        )}
        {address && (
          <>
            <Grid item xs={12}>
              {" "}
              <LocationIcon className={classes.icon} />
              {address}
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

Address.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Address;
