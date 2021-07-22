import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Fade,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";

import { SiteMenuItems, SocialMenuItems } from "./MenuItems";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  closeBox: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  closeIcon: {
    color: (props) => props.primaryText,
  },
  innerBox: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  linkBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  linkHeader: {
    marginBottom: theme.spacing(1),
    textTransform: "uppercase",
  },
  linkHeaderText: {
    fontWeight: 800,
  },
  linkItem: {
    color: (props) => props.primaryText,
    cursor: "pointer",
    marginBottom: theme.spacing(0.5),
    textDecoration: "none",
  },
  linkItemText: {
    fontWeight: 100,
  },
  linkWrapper: {
    color: (props) => props.primaryText,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  show: {
    backgroundColor: (props) => props.secondaryBackground,
    transform: "translateX(0)",
    transition: "transform 250ms",
    height: "100vh",
    position: "fixed",
    width: "300px",
    zIndex: 4,
    // eslint-disable-next-line
    ["@media (max-width:640px)"]: {
      maxWidth: "100%",
      width: "100vw",
    },
  },
  hide: {
    backgroundColor: (props) => props.secondaryBackground,
    transform: "translateX(-100%)",
    transition: "transform 250ms",
    position: "fixed",
    height: "100vh",
    width: "300px",
    zIndex: 4,
  },
  showRootBox: {
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    height: "100vh",
    position: "fixed",
    maxWidth: "100%",
    visibility: "visible",
    width: "100vw",
    zIndex: 3,
  },
  hideRootBox: {
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    height: "100vh",
    position: "absolute",
    visibility: "hidden",
  },
}));

export default function SideMenu(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <>
      <Paper className={props.active ? classes.show : classes.hide} square>
        <Box className={classes.innerBox}>
          <Grid container className={classes.closeBox}>
            <IconButton onClick={props.handleMenuClick}>
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          </Grid>
          <Grid className={classes.linkWrapper}>
            <Box className={classes.linkBox} onClick={props.handleMenuClick}>
              <Box className={classes.linkHeader}>
                <Typography
                  className={classes.linkHeaderText}
                  variant="subtitle1"
                >
                  Site
                </Typography>
              </Box>
              {SiteMenuItems.map((item, index) => {
                return (
                  <Box
                    component="a"
                    className={classes.linkItem}
                    key={index}
                    href={item.location}
                  >
                    <Typography
                      className={classes.linkItemText}
                      variant="subtitle1"
                    >
                      {t(item.name)}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box className={classes.linkBox}>
              <Box className={classes.linkHeader}>
                <Typography
                  className={classes.linkHeaderText}
                  variant="subtitle1"
                >
                  {t("menu:social")}
                </Typography>
              </Box>
              {SocialMenuItems.map((item, index) => {
                return (
                  <Box
                    className={classes.linkItem}
                    key={index}
                    component={Link}
                    to={{
                      pathname: `${item.location}`,
                    }}
                    target="_blank"
                  >
                    <Typography
                      className={classes.linkItemText}
                      variant="subtitle1"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Box>
      </Paper>
      <Fade in={props.active} timeout={250}>
        <Box className={classes.showRootBox}></Box>
      </Fade>
    </>
  );
}
