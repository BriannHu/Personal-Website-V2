import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { ProjectItems, ProjectMap } from "./ProjectItems";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  cardActionArea: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  cardContentHeader: {
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "flex-start",
  },
  cardMedia: {
    minHeight: 240,
    opacity: "0.8",
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  outerCardContainer: {
    backgroundColor: (props) => props.tertiaryBackground,
    borderRadius: 8,
    color: (props) => props.primaryText,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "all 0.25s ease-in-out 0s",
    "&:hover": {
      transform: "translateY(-1%)",
      transition: "all 0.25s ease-in-out 0s",
    },
  },
  outerBoxContainer: {
    height: "100%",
    textDecoration: "none",
    width: "100%",
  },
  projectDescription: {
    fontWeight: 100,
  },
  projectDescriptionChip: {
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(0.5),
  },
  projectName: {
    fontWeight: 600,
  },
  projectTag: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  projectTagSection: {
    marginTop: theme.spacing(1),
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

export default function Projects(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box className={classes.rootBox} id="projects">
      <Box className={classes.innerBox}>
        {" "}
        <Box className={classes.titleBox}>
          <Typography
            className={classes.subtitle}
            variant="h3"
            style={{ color: props.color }}
          >
            {t("projects:title")}
          </Typography>
        </Box>
        <Grid className={classes.outerGridContainer} container spacing={4}>
          {ProjectItems.map((item, index) => {
            const delay = 200 * (index % 3) + 200;
            return (
              <Grid
                className={classes.gridItem}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-once
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <Box
                  className={classes.outerBoxContainer}
                  component={Link}
                  to={{
                    pathname: `${item.projectLink}`,
                  }}
                  target="_blank"
                >
                  <Card className={classes.outerCardContainer}>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      alt={item.projectName}
                      height="240"
                      image={item.imageLink}
                      title={item.projectName}
                    />
                    <CardContent className={classes.cardContent}>
                      <Box className={classes.cardContentHeader}>
                        <Typography
                          className={classes.projectName}
                          gutterBottom
                          style={{
                            color: props.secondaryText,
                            transition: "all 0.25s ease-in-out 0s",
                          }}
                          variant="h5"
                        >
                          {t(item.projectName)}
                        </Typography>
                        <Chip
                          className={classes.projectDescriptionChip}
                          label={t(ProjectMap[item.projectType].typeName)}
                          style={{
                            borderColor: `${
                              ProjectMap[item.projectType].typeColor
                            }`,
                            color: `${ProjectMap[item.projectType].typeColor}`,
                            cursor: "pointer",
                          }}
                          variant="outlined"
                        />
                      </Box>
                      <Box className={classes.cardBodyBox}>
                        <Typography
                          className={classes.projectDescription}
                          gutterBottom
                          variant="body2"
                        >
                          {t(item.projectDescription)}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Box className={classes.cardActionArea}>
                      {item.tags.map((tag, index) => {
                        return (
                          <Chip
                            className={classes.projectTag}
                            key={index}
                            label={tag.name}
                            size="small"
                            style={{
                              borderColor: props.color,
                              color: props.color,
                              cursor: "pointer",
                            }}
                            variant="outlined"
                          />
                        );
                      })}
                    </Box>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
