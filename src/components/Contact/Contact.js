import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/MailOutline";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  boxLink: {
    color: (props) => props.primaryText,
    textAlign: "center",
    textDecoration: "none",
    transition: "all 0.25s ease-in-out 0s",
    "&:hover": {
      color: (props) => props.color,
      transform: "translateY(-10%)",
      transition: "all 0.25s ease-in-out 0s",
    },
  },
  contactFooter: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: theme.spacing(4),
  },
  contactFooterText: {
    color: (props) => props.primaryText,
    transition: "all 0.25s ease-in-out 0s",
    fontWeight: 100,
  },
  gridItem: {
    alignItems: "center",
    color: (props) => props.primaryText,
    transition: "all 0.25s ease-in-out 0s",
    display: "flex",
    flexDirection: "column",
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  rootBox: {
    backgroundColor: (props) => props.secondaryBackground,
    transition: "all 0.25s ease-in-out 0s",
  },
  subtitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    textTransform: "uppercase",
  },
  titleBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
}));

export default function Contact(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  const handleScrollToTop = (e) => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    console.log(anchor);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box className={classes.rootBox} id="contact">
      <Box className={classes.innerBox}>
        {" "}
        <Box className={classes.titleBox}>
          {" "}
          <Typography
            className={classes.subtitle}
            variant="h3"
            style={{ color: props.color }}
          >
            Contact
          </Typography>
        </Box>
        <Grid container>
          <Grid className={classes.gridItem} item xs={3}>
            <Box
              className={classes.boxLink}
              component={Link}
              to={{
                pathname: "https://www.linkedin.com/in/briannhu/",
              }}
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
              <Typography
                className={classes.iconText}
                style={{ fontWeight: 600 }}
              >
                LinkedIn
              </Typography>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Box
              className={classes.boxLink}
              component={Link}
              to={{
                pathname: "https://github.com/BriannHu",
              }}
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
              <Typography
                className={classes.iconText}
                style={{ fontWeight: 600 }}
              >
                Github
              </Typography>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Box
              className={classes.boxLink}
              component={Link}
              to={{
                pathname: "https://www.instagram.com/briann.hu/",
              }}
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
              <Typography
                className={classes.iconText}
                style={{ fontWeight: 600 }}
              >
                Instagram
              </Typography>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Box
              className={classes.boxLink}
              component="a"
              href="mailto:brian.hu@mail.mcgill.ca"
              target="_blank"
            >
              <MailIcon fontSize="large" />
              <Typography
                className={classes.iconText}
                style={{ fontWeight: 600 }}
              >
                Email
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.contactFooter}>
          <Box onClick={handleScrollToTop}>
            <IconButton>
              {" "}
              <ExpandLessIcon fontSize="large" style={{ color: props.color }} />
            </IconButton>
          </Box>
          <Typography className={classes.contactFooterText}>
            {t("contact:credit")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
