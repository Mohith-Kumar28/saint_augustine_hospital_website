import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";
import { useTranslation } from "next-i18next";
import Settings from "./Settings";
import MobileMenu from "./MobileMenu";
// import logo from "~/public/images/medical-logo.svg";
const logo = "";
import brand from "~/public/text/brand";
import routeLink from "~/public/text/link";
import useStyles from "./header-style";
import navMenu from "./menu";

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir, invert } = props;
  const { t, i18n } = useTranslation("common");
  const curLang = "/" + i18n.language;

  const [menuList] = useState([
    createData(navMenu[0], "#" + navMenu[0], 200),
    createData(navMenu[1], "#" + navMenu[1], 200),
    createData(navMenu[2], "#" + navMenu[2], 200),
    createData(navMenu[3], "#" + navMenu[3], 200),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isMobile && (
        <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
      )}
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, invert && classes.invert)}>
              {isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx(
                    "hamburger hamburger--spin",
                    classes.mobileMenu,
                    openDrawer && "is-active"
                  )}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                {invert ? (
                  <Link href={curLang + routeLink.medical.home}>
                    <img src={logo} alt="logo" />
                    {brand.medical.name}
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                    {brand.medical.name}
                  </AnchorLink>
                )}
              </div>
            </nav>
            <nav className={cx(classes.navMenu, invert && classes.invert)}>
              {isDesktop && (
                <Scrollspy items={navMenu} currentClassName="active">
                  {menuList.map((item) => (
                    <li key={item.id.toString()}>
                      {invert ? (
                        // eslint-disable-next-line
                        <Button href={"/" + item.url}>
                          {t("medical-landing.header_" + item.name)}
                        </Button>
                      ) : (
                        // eslint-disable-next-line
                        <Button
                          component={LinkBtn}
                          offset={item.offset || 0}
                          href={item.url}
                        >
                          {t("medical-landing.header_" + item.name)}
                        </Button>
                      )}
                    </li>
                  ))}
                  <li>
                    <Button href={curLang + routeLink.medical.contact}>
                      {t("medical-landing.header_contact")}
                    </Button>
                  </li>
                  {/* <li>
                    <Button href={curLang + routeLink.medical.doctors}>
                      Doctors
                    </Button>
                  </li> */}
                </Scrollspy>
              )}
              {/* <Settings
                toggleDark={onToggleDark}
                toggleDir={onToggleDir}
                invert={invert}
              /> */}
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};

export default Header;
