import React from "react";
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
  outerGridContainer: {
    color: "white",
  },
  outerGridItem: {
    // border: "1px red solid",
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
    backgroundColor: "#1F1F1E",
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
  const classes = useStyles();
  return (
    <Box className={classes.rootBox}>
      <Box className={classes.innerBox}>
        <Box className={classes.titleBox}>
          <Typography
            className={classes.subtitle}
            variant="h3"
            style={{ color: props.color }}
          >
            Experience
          </Typography>
        </Box>
        <Grid className={classes.outerGridContainer} container spacing={8}>
          {ExperienceItems.map((item, index) => {
            return (
              <>
                {item.orientation === "left" ? (
                  <Grid
                    className={classes.outerGridItem}
                    key={index}
                    item
                    xs={12}
                  >
                    <Grid
                      className={classes.innerGridContainer}
                      container
                      spacing={4}
                    >
                      <Grid
                        className={classes.innerGridItem}
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
                              {item.roleLocation}
                            </Typography>
                            <Typography
                              className={classes.roleDate}
                              gutterBottom
                              variant="subtitle1"
                            >
                              {item.roleDate}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                      <Grid
                        className={classes.innerGridItem}
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
                            {item.roleTitle}
                          </Typography>
                          <Box className={classes.chipBox}>
                            {item.tags.map((tag, tagID) => {
                              return (
                                <Chip
                                  className={classes.chip}
                                  key={tagID}
                                  label={tag.name}
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
                                  <>
                                    <ListItem
                                      alignItems="flex-start"
                                      key={pointID}
                                    >
                                      <ListItemIcon style={{ margin: 0 }}>
                                        <ArrowIcon
                                          style={{ color: props.color }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText style={{ margin: 0 }}>
                                        <Typography style={{ fontWeight: 100 }}>
                                          {point.text}
                                        </Typography>
                                      </ListItemText>
                                    </ListItem>
                                  </>
                                );
                              })}
                            </List>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    className={classes.outerGridItem}
                    key={index}
                    item
                    xs={12}
                  >
                    <Grid
                      className={classes.innerGridContainer}
                      container
                      spacing={4}
                    >
                      <Grid
                        className={classes.innerGridItem}
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
                            {item.roleTitle}
                          </Typography>
                          <Box className={classes.chipBox}>
                            {item.tags.map((tag, tagID) => {
                              return (
                                <Chip
                                  className={classes.chip}
                                  key={tagID}
                                  label={tag.name}
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
                                  <>
                                    <ListItem
                                      alignItems="flex-start"
                                      key={pointID}
                                    >
                                      <ListItemIcon style={{ margin: 0 }}>
                                        <ArrowIcon
                                          style={{ color: props.color }}
                                        />
                                      </ListItemIcon>
                                      <ListItemText style={{ margin: 0 }}>
                                        <Typography style={{ fontWeight: 100 }}>
                                          {point.text}
                                        </Typography>
                                      </ListItemText>
                                    </ListItem>
                                  </>
                                );
                              })}
                            </List>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        className={classes.innerGridItem}
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
                              {item.roleLocation}
                            </Typography>
                            <Typography
                              className={classes.roleDate}
                              gutterBottom
                              variant="subtitle1"
                            >
                              {item.roleDate}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
