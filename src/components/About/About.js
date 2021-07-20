import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  LevelConversion,
  Languages,
  Technologies,
  Miscellaneous,
} from "./SkillMaps";

import FrontendIcon from "@material-ui/icons/CodeOutlined";
import BackendIcon from "@material-ui/icons/DnsOutlined";
import CyberIcon from "@material-ui/icons/PartyMode";
import ProficientIcon from "@material-ui/icons/WhatshotOutlined";
import ExperiencedIcon from "@material-ui/icons/GradeOutlined";
import FamiliarIcon from "@material-ui/icons/CheckOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  chipSection: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: "80%",
  },
  conclusion: {
    fontWeight: 100,
  },
  description: {
    color: (props) => props.primaryText,
    transition: "all 0.25s ease-in-out 0s",
    fontWeight: 100,
    maxWidth: 960,
  },
  descriptionLink: {
    fontWeight: 100,
    textDecoration: "none",
  },
  divider: {
    backgroundColor: (props) => props.secondaryText,
    transition: "all 0.25s ease-in-out 0s",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  hoverDescription: {
    // hides text on mobile since users can't hover
    // eslint-disable-next-line
    ["@media (max-width:960px)"]: { display: "none" },
  },
  infoIcon: {
    color: (props) => props.secondaryText,
    position: "absolute",
    top: "10%",
    right: "8%", // hides text on mobile since users can't hover
    // eslint-disable-next-line
    ["@media (max-width:960px)"]: { display: "none" },
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  gridAvatar: {
    padding: theme.spacing(1),
  },
  gridContainer: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  gridItem: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  gridItemPaper: {
    alignItems: "center",
    backgroundColor: (props) => props.tertiaryBackground,
    transition: "all 0.25s ease-in-out 0s",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingTop: theme.spacing(3),
    width: "100%",
  },
  gridItemSubtitle: {
    color: (props) => props.primaryText,
    transition: "all 0.25s ease-in-out 0s",
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  legendBox: {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 640,
    margin: "0 auto",
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
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

export default function About(props) {
  const classes = useStyles(props);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <Box className={classes.rootBox} id="about">
      <Box className={classes.innerBox}>
        <Box className={classes.titleBox}>
          <Typography
            className={classes.subtitle}
            variant="h3"
            style={{ color: props.color }}
          >
            About
          </Typography>
          <Typography className={classes.description} variant="h6">
            Hello! My name is Brian and I'm a third-year student at McGill
            University. Currently, I'm pursuing a degree in{" "}
            <Typography
              className={classes.descriptionLink}
              component={Link}
              style={{ color: props.color }}
              to={{
                pathname:
                  "https://www.mcgill.ca/study/2021-2022/faculties/science/undergraduate/programs/bachelor-science-bsc-honours-computer-science",
              }}
              target="_blank"
              variant="h6"
            >
              Honors Computer Science
            </Typography>{" "}
            and with a{" "}
            <Typography
              className={classes.descriptionLink}
              component={Link}
              style={{ color: props.color }}
              to={{
                pathname:
                  "https://www.mcgill.ca/mathstat/undergraduate/programs/b-sc/minor-statistics-b-sc",
              }}
              target="_blank"
              variant="h6"
            >
              Statistics minor
            </Typography>{" "}
            . I'm fascinated by the intersection of big data and performant
            designs, and hope to eventually pursue a career in software
            development. <br /> <br />
            My interests include AI/ML and cybersecurity, and I strive to
            incorporate these themes in my personal projects. In my spare time,
            I enjoy both participating in hackathons as well as tutoring others
            on the fundamentals of programming. <br />
            <br />
            <Typography></Typography>
            Feel free to check out my{" "}
            <Typography
              className={classes.descriptionLink}
              component={Link}
              to={{
                pathname: "https://github.com/BriannHu",
              }}
              target="_blank"
              style={{ color: props.color }}
              variant="h6"
            >
              Github
            </Typography>{" "}
            , connect on{" "}
            <Typography
              className={classes.descriptionLink}
              component={Link}
              to={{
                pathname: "https://www.linkedin.com/in/briannhu/",
              }}
              target="_blank"
              style={{ color: props.color }}
              variant="h6"
            >
              LinkedIn
            </Typography>{" "}
            , or download my{" "}
            <Typography
              className={classes.descriptionLink}
              component={Link}
              to={{
                pathname: "/resume/BrianHu_Resume.pdf",
              }}
              target="_blank"
              style={{ color: props.color }}
              variant="h6"
            >
              resume!
              <br />
              <br />
            </Typography>
          </Typography>
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.titleBox}>
          <Typography
            className={classes.conclusion}
            style={{ color: props.color }}
            variant="h5"
          >
            Here are the languages, tools and technologies I've picked up along
            the way... <br />
          </Typography>
          <Typography
            className={classes.hoverDescription}
            style={{ color: props.color, fontWeight: 800 }}
            variant="subtitle1"
          >
            (Hover over each icon!)
          </Typography>
        </Box>
        <Box className={classes.legendBox}>
          <Tooltip title="> 3 years of experience">
            <Chip
              icon={<ProficientIcon style={{ color: "#00b0ff" }} />}
              label="Proficient"
              style={{ borderColor: "#00b0ff", color: "#00b0ff" }}
              variant="outlined"
            />
          </Tooltip>
          <Tooltip title="1-3 years of experience">
            <Chip
              icon={<ExperiencedIcon style={{ color: "#00e676" }} />}
              label="Experienced"
              style={{ borderColor: "#00e676", color: "#00e676" }}
              variant="outlined"
            />
          </Tooltip>
          <Tooltip title="< 1 year of experience">
            <Chip
              icon={<FamiliarIcon style={{ color: "#ff9800" }} />}
              label="Familiar"
              style={{ borderColor: "#ff9800", color: "#ff9800" }}
              variant="outlined"
            />
          </Tooltip>
        </Box>
        <Grid className={classes.gridContainer} container spacing={4}>
          <Grid
            className={classes.gridItem}
            container
            data-aos="fade-up"
            data-aos-once
            item
            xs={12}
            md={4}
          >
            <Paper className={classes.gridItemPaper}>
              <Avatar
                className={classes.gridAvatar}
                style={{
                  backgroundColor: props.hue,
                  color: props.color,
                }}
              >
                <FrontendIcon />
              </Avatar>
              <Typography className={classes.gridItemSubtitle} variant="h6">
                Programming Languages
              </Typography>
              <Box className={classes.chipSection}>
                {Languages.map((item, index) => {
                  return (
                    <Tooltip title={item.blurb} key={index}>
                      <Chip
                        className={classes.chip}
                        label={item.name}
                        variant="outlined"
                        style={{
                          borderColor: LevelConversion[item.level],
                          color: LevelConversion[item.level],
                        }}
                      />
                    </Tooltip>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
          <Grid
            className={classes.gridItem}
            container
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once
            item
            xs={12}
            md={4}
          >
            <Paper className={classes.gridItemPaper}>
              <Avatar
                className={classes.gridAvatar}
                style={{
                  backgroundColor: props.hue,
                  color: props.color,
                }}
              >
                <BackendIcon />
              </Avatar>
              <Typography className={classes.gridItemSubtitle} variant="h6">
                Tools & Technologies
              </Typography>
              <Box className={classes.chipSection}>
                {Technologies.map((item, index) => {
                  return (
                    <Tooltip title={item.blurb} key={index}>
                      <Chip
                        className={classes.chip}
                        label={item.name}
                        variant="outlined"
                        style={{
                          borderColor: LevelConversion[item.level],
                          color: LevelConversion[item.level],
                        }}
                      />
                    </Tooltip>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
          <Grid
            className={classes.gridItem}
            container
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once
            item
            xs={12}
            md={4}
          >
            <Paper className={classes.gridItemPaper}>
              <Avatar
                className={classes.gridAvatar}
                style={{
                  backgroundColor: props.hue,
                  color: props.color,
                }}
              >
                <CyberIcon />
              </Avatar>
              <Typography className={classes.gridItemSubtitle} variant="h6">
                Miscellaneous
              </Typography>
              <Box className={classes.chipSection}>
                <Tooltip title="These are the things I've recently picked up or I do for fun!">
                  <InfoIcon className={classes.infoIcon} />
                </Tooltip>
                {Miscellaneous.map((item, index) => {
                  return (
                    <Chip
                      className={classes.chip}
                      key={index}
                      label={item.name}
                      variant="outlined"
                      style={{
                        borderColor: props.primaryText,
                        color: props.primaryText,
                        transition: "all 0.25s ease-in-out 0s",
                      }}
                    />
                  );
                })}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
