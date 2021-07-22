import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Grid,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TextLoop from "react-text-loop";

import GitHubIcon from "@material-ui/icons/GitHub";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ResumeIcon from "@material-ui/icons/MenuBook";

import { useTranslation } from "react-i18next";
import "./Hero.css";

const useStyles = makeStyles((theme) => ({
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  imageBox: {
    position: "relative",
    zIndex: 0,
  },
  infoIcon: {
    color: (props) => props.secondaryText,
    transition: "all 0.25s ease-in-out 0s",
    position: "absolute",
    right: 0,
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  innerGridItem: {
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    // paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    // eslint-disable-next-line
    ["@media (max-width:640px)"]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  outerGridItem: {
    display: "flex",
  },
  textBox1: {
    color: (props) => props.primaryText,
    transition: "all 0.25s ease-in-out 0s",
    marginBottom: theme.spacing(2),
  },
  textBox2: {
    color: (props) => props.secondaryText,
    transition: "all 0.25s ease-in-out 0s",
    marginBottom: theme.spacing(3),
  },
  textBox3: {
    alignItems: "flex-start",
    display: "flex",
    // eslint-disable-next-line
    ["@media (max-width:640px)"]: { flexDirection: "column" },
  },
  textLoop: {
    zIndex: 0,
  },
  rootBox: {
    backgroundColor: (props) => props.primaryBackground,
    transition: "all 0.25s ease-in-out 0s",
  },
  rootContainer: {
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(-4),
    // eslint-disable-next-line
    ["@media (max-width:640px)"]: {
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
  },
  textBoxButton: {
    color: "white",
    fontSize: "1.1rem",
    marginRight: theme.spacing(2),
    padding: "8px 24px",
    textTransform: "none",
    // eslint-disable-next-line
    ["@media (max-width:640px)"]: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function Hero(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <Box className={classes.rootBox} id="/">
      <Box className={classes.innerBox} id="back-to-top-anchor">
        <Grid className={classes.outerGridItem} container>
          <Grid className={classes.innerGridItem} container item xs={12} md={6}>
            <Box>
              <Box className={classes.textBox1} component="div">
                <Typography variant="h2" style={{ fontWeight: 900 }}>
                  {t("hero:greeting")} <br /> {t("hero:subgreeting")}{" "}
                  <Typography
                    component="span"
                    variant="h2"
                    style={{ color: props.color, fontWeight: 900 }}
                  >
                    <TextLoop
                      children={[
                        `${t("hero:description.part1")} 🎨`,
                        `${t("hero:description.part2")}  💻`,
                        `${t("hero:description.part3")}  🔬`,
                        `${t("hero:description.part4")}  📖`,
                      ]}
                      className={classes.textLoop}
                      interval={2000}
                      mask={true}
                      adjustingSpeed={100}
                    ></TextLoop>
                  </Typography>
                </Typography>
              </Box>
              <Box className={classes.textBox2} component="div">
                <Typography variant="h6">{t("hero:study")}</Typography>
              </Box>
              <Box className={classes.textBox3} component="div">
                <Button
                  className={classes.textBoxButton}
                  style={{
                    borderColor: props.color,
                    color: props.color,
                  }}
                  variant="outlined"
                  component={Link}
                  to={{
                    pathname: "https://github.com/BriannHu",
                  }}
                  target="_blank"
                >
                  {t("hero:button1")}{" "}
                  <GitHubIcon className={classes.buttonIcon} />
                </Button>
                <Button
                  className={classes.textBoxButton}
                  style={{ borderColor: props.color, color: props.color }}
                  variant="outlined"
                  component={Link}
                  to={{
                    pathname: "/resume/BrianHu_Resume.pdf",
                  }}
                  target="_blank"
                >
                  {t("hero:button2")}{" "}
                  <ResumeIcon className={classes.buttonIcon} />
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid className={classes.innerGridItem} item xs={12} md={6}>
            <Box className={classes.imageBox}>
              <Tooltip title={t("hero:credit")} arrow>
                <IconButton
                  component={Link}
                  className={classes.infoIcon}
                  to={{
                    pathname:
                      "https://www.youtube.com/watch?v=9avxBseVQtI&ab_channel=RishiDraws",
                  }}
                  target="_blank"
                >
                  <InfoIcon />
                </IconButton>
              </Tooltip>
              <img className="hero-image" src={props.image} alt=""></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
