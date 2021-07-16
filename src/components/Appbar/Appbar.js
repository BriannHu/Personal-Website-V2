import React, { useState } from "react";
import {
  colors,
  Box,
  IconButton,
  Paper,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import MoonIcon from "@material-ui/icons/NightsStayOutlined";
import SunIcon from "@material-ui/icons/WbSunnyOutlined";

const useStyles = makeStyles((theme) => ({
  boxColorOption: {
    borderRadius: "100%",
    cursor: "pointer",
    height: "20px",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    width: "20px",
  },
  boxColorSelect: {
    backgroundColor: "#1F1F1E",
    borderRadius: theme.spacing(4),
    display: "flex",
    padding: theme.spacing(1),
  },
  boxItem: {
    display: "flex",
    alignItems: "center",
  },
  boxItem1Box1: {
    marginRight: theme.spacing(1),
  },
  displayIcon: {},
  header: {
    backgroundColor: "#343432",
  },
  iconButton: {
    marginLeft: theme.spacing(1),
  },
  innerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  menuIcon: {
    color: "white",
  },
  moonIcon: {
    color: "white",
  },
  show: {
    backgroundColor: "#343432",
    position: "fixed",
    transform: "translateY(0)",
    transition: "transform .5s",
    width: "100%",
  },
  hide: {
    backgroundColor: "#343432",
    position: "fixed",
    transform: "translateY(-100%)",
    transition: "transform .5s",
    width: "100%",
  },
  sunIcon: {
    color: "yellow",
  },
  rootBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: "0 auto",
    maxWidth: 1236,
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const [light, setLight] = useState(false);

  const handleLightClick = () => {
    setLight(!light);
  };

  return (
    <Paper
      component="header"
      className={trigger ? classes.hide : classes.show}
      square
    >
      <Box className={classes.rootBox}>
        <Box className={classes.innerBox}>
          <Box className={classes.boxItem}>
            <Box className={classes.boxItem1Box1}>
              <IconButton
                className={classes.menuIcon}
                onClick={props.handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box component="a" className={classes.boxItem1Box2}>
              BH
            </Box>
          </Box>
          <Box className={classes.boxItem}>
            <Box className={classes.boxColorSelect}>
              <Box
                className={classes.boxColorOption}
                style={{ backgroundColor: colors.red[700] }}
                onClick={() => props.handleColorClick("#D3302F")}
              ></Box>
              <Box
                className={classes.boxColorOption}
                style={{ backgroundColor: colors.blue[700] }}
                onClick={() => props.handleColorClick("#1876D2")}
              ></Box>
              <Box
                className={classes.boxColorOption}
                style={{ backgroundColor: colors.green[700] }}
                onClick={() => props.handleColorClick("#04de37")}
              ></Box>
              <Box
                className={classes.boxColorOption}
                style={{ backgroundColor: colors.purple[700] }}
                onClick={() => props.handleColorClick("#7B1FA2")}
              ></Box>
            </Box>
            <IconButton
              className={classes.iconButton}
              onClick={handleLightClick}
            >
              {light ? (
                <MoonIcon className={classes.moonIcon} />
              ) : (
                <SunIcon className={classes.sunIcon} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
