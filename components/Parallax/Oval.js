import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function OvalTop() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            translateY={[0, 30]}
            className="figure"
          >
            <div
              className={
                cx(
                  classes.parallaxOval,
                  classes.parallaxPrimary
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
