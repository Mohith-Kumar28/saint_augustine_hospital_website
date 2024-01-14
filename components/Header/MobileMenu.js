import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import routeLink from '~/public/text/link';
import useStyles from './header-style';
import navMenu from './menu';

function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation('common');

  const curLang = '/' + i18n.language;

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <ListItemText primary={t('medical-landing.header_' + item)} className={classes.menuList} />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href={curLang + routeLink.medical.contact}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText primary={t('medical-landing.header_contact')} className={classes.menuList} />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
