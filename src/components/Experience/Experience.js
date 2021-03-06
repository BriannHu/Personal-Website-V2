import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Avatar,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import WorkIcon from "@material-ui/icons/ComputerOutlined";
import SchoolIcon from "@material-ui/icons/SchoolOutlined";
import ArrowIcon from "@material-ui/icons/ArrowRightAltOutlined";

import { ExperienceItems } from "./ExperienceItems";
import { LevelConversion } from "../About/SkillMaps";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  innerPaper: {
    alignItems: "stretch",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 340,
    justifyContent: "space-between",
  },
  innerGridContainer: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  innerGridContainer2: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    // eslint-disable-next-line
    ["@media (max-width:960px)"]: { flexDirection: "column-reverse" },
  },
  outerGridContainer: {
    color: (props) => props.primaryText,
    transition: "all 0.25s ease-in-out 0s",
  },
  outerGridItem: {
    // border: "1px red solid",
  },
  listItemIcon: {
    minWidth: 40,
  },
  paperTextBox: {
    color: "white",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  roleDate: {
    marginBottom: theme.spacing(2),
  },
  roleLocation: {
    fontWeight: 600,
  },
  roleTitle: {
    fontWeight: 500,
  },
  roleSubtitle: {
    color: "#b4b4b1",
    fontWeight: 500,
  },
  rootBox: {
    backgroundColor: (props) => props.primaryBackground,
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

export default function Experience(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <Box className={classes.rootBox} id="experience">
      <Box className={classes.innerBox}>
        <Box className={classes.titleBox}>
          <Typography
            className={classes.subtitle}
            variant="h3"
            style={{ color: props.color }}
          >
            {t("experience:title")}
          </Typography>
        </Box>
        <Grid className={classes.outerGridContainer} container spacing={8}>
          {ExperienceItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.orientation === "left" ? (
                  <Grid className={classes.outerGridItem} item xs={12}>
                    <Grid
                      className={classes.innerGridContainer}
                      container
                      spacing={4}
                    >
                      <Grid
                        className={classes.innerGridItem}
                        data-aos="fade-right"
                        data-aos-once
                        item
                        xs={12}
                        md={6}
                      >
                        <Paper
                          className={classes.innerPaper}
                          style={{
                            backgroundImage: `url(${item.imageLink})`, // 80% opacity using Gimp
                          }}
                        >
                          <Avatar
                            className={classes.avatar}
                            style={{ backgroundColor: props.color }}
                          >
                            {item.type === "work" ? (
                              <WorkIcon fontSize="large" />
                            ) : (
                              <SchoolIcon fontSize="large" />
                            )}
                          </Avatar>
                          <Box className={classes.paperTextBox}>
                            <Typography
                              className={classes.roleLocation}
                              variant="h5"
                            >
                              {t(item.roleLocation)}
                            </Typography>
                            <Typography
                              className={classes.roleDate}
                              gutterBottom
                              variant="subtitle1"
                            >
                              {t(item.roleDate)}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                      <Grid
                        className={classes.innerGridItem}
                        data-aos="fade-left"
                        data-aos-once
                        item
                        xs={12}
                        md={6}
                      >
                        <Box className={classes.gridItemOuterBox}>
                          <Typography
                            className={classes.roleTitle}
                            gutterBottom
                            variant="h4"
                          >
                            {t(item.roleTitle)}
                          </Typography>
                          <Box className={classes.chipBox}>
                            {item.tags.map((tag, tagID) => {
                              return (
                                <Chip
                                  className={classes.chip}
                                  key={tagID}
                                  label={t(tag.name)} // CAN REMOVE AFTER, ONLY NECESSARY FOR "IN PROGRESS" TRANSLATION
                                  style={{
                                    borderColor: LevelConversion[tag.level],
                                    color: LevelConversion[tag.level],
                                  }}
                                  variant="outlined"
                                />
                              );
                            })}
                          </Box>
                          <Box className={classes.listBox}>
                            <List>
                              {item.points.map((point, pointID) => {
                                return (
                                  <ListItem
                                    alignItems="flex-start"
                                    key={pointID}
                                  >
                                    <ListItemIcon
                                      className={classes.listItemIcon}
                                      style={{ margin: 0 }}
                                    >
                                      <ArrowIcon
                                        style={{ color: props.color }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText style={{ margin: 0 }}>
                                      <Typography style={{ fontWeight: 100 }}>
                                        {t(point.text)}
                                      </Typography>
                                    </ListItemText>
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid className={classes.outerGridItem} item xs={12}>
                    <Grid
                      className={classes.innerGridContainer2}
                      container
                      spacing={4}
                    >
                      <Grid
                        className={classes.innerGridItem}
                        data-aos="fade-right"
                        data-aos-once
                        item
                        xs={12}
                        md={6}
                      >
                        <Box className={classes.gridItemOuterBox}>
                          <Typography
                            className={classes.roleTitle}
                            gutterBottom
                            variant="h4"
                          >
                            {t(item.roleTitle)}
                          </Typography>
                          <Box className={classes.chipBox}>
                            {item.tags.map((tag, tagID) => {
                              return (
                                <Chip
                                  className={classes.chip}
                                  key={tagID}
                                  label={t(tag.name)} // CAN REMOVE AFTER, ONLY NECESSARY FOR "IN PROGRESS" TRANSLATION
                                  style={{
                                    borderColor: LevelConversion[tag.level],
                                    color: LevelConversion[tag.level],
                                  }}
                                  variant="outlined"
                                />
                              );
                            })}
                          </Box>
                          <Box className={classes.listBox}>
                            <List>
                              {item.points.map((point, pointID) => {
                                return (
                                  <ListItem
                                    alignItems="flex-start"
                                    key={pointID}
                                  >
                                    <ListItemIcon
                                      className={classes.listItemIcon}
                                      style={{ margin: 0 }}
                                    >
                                      <ArrowIcon
                                        style={{ color: props.color }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText style={{ margin: 0 }}>
                                      <Typography style={{ fontWeight: 100 }}>
                                        {t(point.text)}
                                      </Typography>
                                    </ListItemText>
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        className={classes.innerGridItem}
                        data-aos="fade-left"
                        data-aos-once
                        item
                        xs={12}
                        md={6}
                      >
                        <Paper
                          className={classes.innerPaper}
                          style={{
                            backgroundImage: `url(${item.imageLink})`, // 80% opacity using Gimp
                          }}
                        >
                          <Avatar
                            className={classes.avatar}
                            style={{ backgroundColor: props.color }}
                          >
                            {item.type === "work" ? (
                              <WorkIcon fontSize="large" />
                            ) : (
                              <SchoolIcon fontSize="large" />
                            )}
                          </Avatar>
                          <Box className={classes.paperTextBox}>
                            <Typography
                              className={classes.roleLocation}
                              variant="h5"
                            >
                              {t(item.roleLocation)}
                            </Typography>
                            <Typography
                              className={classes.roleDate}
                              gutterBottom
                              variant="subtitle1"
                            >
                              {t(item.roleDate)}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
